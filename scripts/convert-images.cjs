// scripts/convert-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public';
const outputDir = './public/webp';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter(f =>
  /\.(jpg|jpeg|png)$/i.test(f)
);

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.\w+$/, '.webp'));

    await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(outputPath);

    console.log(`Converted: ${file}`);
  }
})();