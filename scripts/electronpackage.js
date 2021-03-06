const process = require('process');
const path = require('path');
const electronPackager = require('electron-packager');

const baseDir = path.join(__dirname, '..');

electronPackager({
  dir: baseDir,
  out: path.join(baseDir, 'build'),
  icon: path.join(baseDir, 'public/images/icon'),
  all: process.argv.includes('--all'),
  asar: true,
  overwrite: true,
  ignore: [
    /^\/(?:[^/]+?\/)*(?:\..+|.+\.less)$/, // dot-files and less files anywhere
    /^\/(?:\..+|assets|clicktests|coverage|dist|scripts|test)\//, // folders in root
    /^\/[^/]+?\.(?:js|md|png|tgz|yml)$/, // files in root
    /^\/public\/(?:source|vendor)\//, // folders in /public
  ],
});
