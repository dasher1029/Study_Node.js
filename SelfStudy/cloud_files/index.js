const fs = require('fs');
const path = require('path');

const dirPath = __dirname;

const files = fs.readdirSync(dirPath);

const txtFiles = files.filter(file => path.extname(file) === '.txt');

module.exports = txtFiles;