var Client = require('ftp');
var recursiveReadSync = require('recursive-readdir-sync');
var fs = require('fs');
var path = require('path');
var ENV = process.env;
var BUILD_PATH = path.resolve(__dirname, ENV.FTP_BUILD_PATH || 'out');

let uploadList;

// try {
//     uploadList = recursiveReadSync(BUILD_PATH);
// } catch(err){
//   if(err.errno === 34){
//     console.log('Path does not exist');
//   } else {
//     //something unrelated went wrong, rethrow
//     throw err;
//   }
// }

const listFiles = dir => {
  let filesList = [];
  console.log(`Read files from ${dir}`);
  if (fs.existsSync('out')) {
    console.log('directory `./out` found');
  }
  if (!fs.existsSync(dir)) {
    console.log('directory not found');
    return filesList;
  }

  const files = fs.readdirSync(dir);
  files.map(file => {
    const fullPath = path.resolve(dir, file);
    const stats = fs.lstatSync(fullPath);
    if (stats.isDirectory()) {
      filesList = filesList.concat(listFiles(fullPath));
    } else {
      if (dir.endsWith(BUILD_PATH)) {
        filesList.push({
          local: fullPath,
          target: file,
        });
      } else {
        const lastSeparator = dir.lastIndexOf(path.sep);
        const parentDir = dir.substring(lastSeparator);
        const targetPath = `${parentDir}${path.sep}${file}`.replace(/\\/g, '/');

        filesList.push({
          local: fullPath,
          target: targetPath,
        });
      }
    }
  });

  return filesList;
};

uploadList = listFiles(BUILD_PATH);
console.log(`Build completed to ${BUILD_PATH}...`);
console.log('Built file list:', uploadList);
