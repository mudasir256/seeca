#!/usr/bin/env node
/**
 * Soft-detect a local Chrome/Chromium binary for react-snap, then run it.
 * Avoids hard-coding OS-specific paths in package.json for CI/deploy.
 */
const fs = require('fs');
const { spawnSync } = require('child_process');

const candidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].filter(Boolean);

for (const candidate of candidates) {
  try {
    if (fs.existsSync(candidate)) {
      process.env.PUPPETEER_EXECUTABLE_PATH = candidate;
      break;
    }
  } catch (_) {
    // ignore
  }
}

const result = spawnSync('npx', ['react-snap'], {
  stdio: 'inherit',
  env: process.env,
  shell: process.platform === 'win32',
});

process.exit(result.status === null ? 1 : result.status);
