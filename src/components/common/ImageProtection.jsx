import { useEffect } from 'react';

/**
 * ImageProtection – makes it harder for casual users to download site images.
 *
 * What it does:
 * - Disables right-click context menu on images (no "Save image as")
 * - Prevents dragging images to save them
 *
 * Limitation: It cannot fully prevent downloads. If the browser can show an image,
 * the data is on the user's device (screenshots, dev tools, etc. still work).
 */
function ImageProtection() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      const target = e.target;
      // Only block when right-clicking directly on an image or inside <picture>
      if (target.tagName === 'IMG' || (target.closest && target.closest('picture'))) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
    };
  }, []);

  return (
    <style dangerouslySetInnerHTML={{ __html: `
      img { -webkit-user-drag: none; user-select: none; }
    `}} />
  );
}

export default ImageProtection;
