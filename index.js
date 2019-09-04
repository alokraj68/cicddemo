const http = require('http');
var dateModule = require('./date');

const hostname = process.env.host || process.env.HOST ||'127.0.0.1';
const port = process.env.port || process.env.PORT || 3000;
var date = dateModule.myDateTime();
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n'+date);
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

server.listen(port,() => {
  console.log(`Server running at ${port}`);
});
