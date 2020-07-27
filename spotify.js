/* Load the HTTP library */
var http = require('http');
const curl = new (require( 'curl-request' ))();


/* Create an HTTP server to handle responses */

var scopes = \'user-read-private user-read-email\'


const CLIENT_ID = "46af1dc2ea4e4f3b8f2ff07422841c3d";
const CLIENT_SECRET = "17de114222564c36a60356a26e83af37";
const REDIRECT_URI = "https://weitzly.com";

const auth_url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=http:%2F%2Fweitzly.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123`

let buffer = new Buffer(`${CLIENT_ID}:${CLIENT_SECRET}`);
let base64data = buffer.toString('base64');

// Basic <base64 encoded client_id:client_secret>

// curl -X "POST" -H "Authorization: Basic ZjM4ZjAw...WY0MzE=" 
//   -d grant_type=client_credentials https://accounts.spotify.com/api/token



// curl.setHeaders([
//   'Authorization: Basic ZjM4ZjAw...WY0MzE=',
//   'user-agent: Mozilla/5.0  (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
// ])
// .post('https://accounts.spotify.com/api/token')
// .then(({statusCode, body, headers}) => {
//   console.log(statusCode, body, headers)
// })
// .catch((e) => {
//   console.log(e);
// });



http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
  })
  .listen(8888);
