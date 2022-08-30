const http = require('http');

const host = "localhost";
const port  = 8000;
const requestRandler = (req,res) => {
    res.writeHead(200);
    res.end('Olá mundo')
}
const server = http.createServer(requestRandler).listen(port,host);
console.log(`Server running ate http://${host}:${port}`)