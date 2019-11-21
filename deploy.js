var Client = require('ftp');
var recursiveReadSync = require('recursive-readdir-sync');
var fs = require('fs');
var path = require('path');
var ENV = process.env;
var BUILD_PATH = path.resolve(__dirname, ENV.FTP_BUILD_PATH || 'out');
var TARGET_PATH = ENV.FTP_SERVER_PATH;
var USERNAME = ENV.FTP_USERNAME;
var PASSWORD = ENV.FTP_PASSWORD;
var HOST = ENV.FTP_SERVER_HOST;
var PORT = ENV.FTP_SERVER_PORT || 21;

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
    return;
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
console.log(`Preparing to deploy from ${BUILD_PATH}...`);
console.log('Uploadlist:', uploadList);

var client = new Client();

client.on('greeting', function(msg) {
  console.log('greeting', msg);
});

client.on('ready', function() {
  console.log(`List files in ${TARGET_PATH}`);
  client.list(TARGET_PATH, function(err, serverList) {
    console.log('get list from server.', serverList);
    var total = uploadList.length;
    console.log(`Upload ${total} files to server server.`);
    var uploadCount = 0;
    var errorList = [];
    uploadList.forEach(function(file) {
      console.log('start', file.local + ' --> ' + file.target);
      client.put(file.local, file.target, function(err) {
        uploadCount++;
        if (err) {
          console.error('error', file.local + ' --> ' + file.target);
          console.error(err.message);
          throw err;
        } else {
          console.info(
            'success',
            file.local + ' --> ' + file.target,
            '( ' + uploadCount + '/' + total + ' )'
          );
        }

        if (uploadCount === total) {
          client.end();
          if (errorList.length === 0) {
            console.info('All files uploaded!');
          } else {
            console.log('Failed files:');
            errorList.forEach(function(file) {
              console.log(file.local + ' --> ' + file.target);
            });
            throw 'Total Failed: ' + errorList.length;
          }
        }
      });
    });
  });
});
// connect to localhost:21 as anonymous
client.connect({
  host: HOST,
  port: PORT,
  user: USERNAME,
  password: PASSWORD,
});
