alert("hello zhy!!")

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is a simple HTTP server.\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
