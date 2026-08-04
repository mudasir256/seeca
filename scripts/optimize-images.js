#!/usr/bin/env node
/**
 * Compress heavy images under public/ for better page speed / SEO.
 *
 * Dry-run (report only):
 *   node scripts/optimize-images.js
 *
 * Write optimized files in place:
 *   node scripts/optimize-images.js --write
 *
 * Optional max dimension (default 2400):
 *   node scripts/optimize-images.js --write --max=1920
 */

const fs = require('fs');
const path = require('path');

async function main() {
  let sharp;
  let fg;
  try {
    sharp = require('sharp');
    fg = require('fast-glob');
  } catch (err) {
    console.error(
      'Missing deps. Install with:\n  npm i -D sharp fast-glob\n'
    );
    process.exit(1);
  }

  const write = process.argv.includes('--write');
  const maxArg = process.argv.find((arg) => arg.startsWith('--max='));
  const maxDimension = maxArg ? Number(maxArg.split('=')[1]) : 2400;
  const root = path.join(__dirname, '..', 'public');

  const files = await fg(['**/*.{jpg,jpeg,png,webp}'], {
    cwd: root,
    absolute: true,
    onlyFiles: true,
    dot: false,
  });

  let examined = 0;
  let wouldChange = 0;
  let savedBytes = 0;

  for (const file of files) {
    examined += 1;
    try {
      const input = await fs.promises.readFile(file);
      const before = input.length;
      // Skip tiny assets
      if (before < 80 * 1024) continue;

      const image = sharp(input, {
        failOn: 'none',
        limitInputPixels: false,
      }).rotate();
      const meta = await image.metadata();
      const width = meta.width || 0;
      const height = meta.height || 0;
      const needsResize = width > maxDimension || height > maxDimension;

      let pipeline = sharp(input, {
        failOn: 'none',
        limitInputPixels: false,
      }).rotate();
      if (needsResize) {
        pipeline = pipeline.resize({
          width: maxDimension,
          height: maxDimension,
          fit: 'inside',
          withoutEnlargement: true,
        });
      }

      const ext = path.extname(file).toLowerCase();
      let output;
      if (ext === '.png') {
        output = await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();
      } else if (ext === '.webp') {
        output = await pipeline.webp({ quality: 78 }).toBuffer();
      } else {
        output = await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
      }

      if (output.length >= before * 0.97) continue;

      wouldChange += 1;
      const delta = before - output.length;
      savedBytes += delta;
      const rel = path.relative(root, file);
      const kb = (n) => `${(n / 1024).toFixed(1)}KB`;
      console.log(
        `${write ? 'WRITE' : 'DRY '} ${rel}  ${kb(before)} → ${kb(output.length)} (−${kb(delta)})`
      );

      if (write) {
        await fs.promises.writeFile(file, output);
      }
    } catch (err) {
      console.warn(`SKIP  ${path.relative(root, file)} — ${err.message}`);
    }
  }

  console.log(
    `\nExamined ${examined} images. ${write ? 'Updated' : 'Would update'} ${wouldChange}. ` +
      `Saved ~${(savedBytes / (1024 * 1024)).toFixed(2)} MB${!write ? ' (dry-run)' : ''}.`
  );
  if (!write && wouldChange > 0) {
    console.log('Re-run with --write to apply changes.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
