import { task, src, dest } from 'gulp';

const fs = require('fs-extra');
const concat = require('concat');

task('styles:theme', buildScssFromFileTask(packageOut, themeSourceFile, true));
(async function build(): void {
  const files = [
    './dist/air/runtime.js',
    './dist/air/polyfills.js',
    './dist/air/scripts.js',
    './dist/air/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/egeo.js');
})();
