const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
using express

var express = require('express)
var app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(process.env.PORT || 3000)


*/