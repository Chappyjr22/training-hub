const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
server.listen(port, '127.0.0.1', () => {
  console.log('test server listening on 127.0.0.1:' + port);
});
server.on('error', (err) => {
  console.error('server error', err);
  process.exit(1);
});
setTimeout(() => {}, 1000 * 60 * 10);
