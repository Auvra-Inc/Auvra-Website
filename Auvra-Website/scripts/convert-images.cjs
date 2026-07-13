// scripts/convert-images.cjs
// Converts images in /public to WebP with resizing for performance
// Handles top-level files + subdirectories

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public';
const outputBaseDir = './public/webp';

// Max display width — enough for a mobile-first site at 2x density
const MAX_WIDTH = 800;

if (!fs.existsSync(outputBaseDir)) {
  fs.mkdirSync(outputBaseDir, { recursive: true });
}

async function convertDir(dir, relPath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullInput = path.join(dir, entry.name);
    const relEntry = relPath ? `${relPath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      // Skip the webp output folder to avoid re-processing
      if (entry.name === 'webp' || entry.name === 'admin') continue;

      const subOutputDir = path.join(outputBaseDir, entry.name);
      if (!fs.existsSync(subOutputDir)) {
        fs.mkdirSync(subOutputDir, { recursive: true });
      }
      await convertDir(fullInput, relEntry);
      continue;
    }

    if (!/\.(jpg|jpeg|png|gif|avif)$/i.test(entry.name)) continue;

    // Determine output path (mirror folder structure under /webp)
    const outputName = entry.name.replace(/\.\w+$/, '.webp');
    const outputSubDir = relPath
      ? path.join(outputBaseDir, relPath.split('/').slice(0, -1).join('/'))
      : outputBaseDir;

    if (!fs.existsSync(outputSubDir)) {
      fs.mkdirSync(outputSubDir, { recursive: true });
    }

    const outputPath = path.join(outputSubDir, outputName);

    // Skip if already up-to-date (output newer than input)
    if (
      fs.existsSync(outputPath) &&
      fs.statSync(outputPath).mtimeMs > fs.statSync(fullInput).mtimeMs
    ) {
      console.log(`Skipped (up-to-date): ${relEntry}`);
      continue;
    }

    try {
      const meta = await sharp(fullInput).metadata();
      const resizeOptions =
        meta.width && meta.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};

      await sharp(fullInput)
        .resize(resizeOptions)
        .webp({ quality: 75, effort: 4 })
        .toFile(outputPath);

      const inMB = (fs.statSync(fullInput).size / 1048576).toFixed(2);
      const outMB = (fs.statSync(outputPath).size / 1048576).toFixed(2);
      console.log(`✓ ${relEntry}  ${inMB}MB → ${outMB}MB`);
    } catch (err) {
      console.error(`✗ Failed: ${relEntry} — ${err.message}`);
    }
  }
}

(async () => {
  console.log('Converting images to WebP (max 800px wide, quality 75)…\n');
  await convertDir(inputDir);
  console.log('\nDone.');
})();
