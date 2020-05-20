//require

const times = require('./times')

console.log(times);

const http = require('http');
const host = '127.0.0.1';
const porta = '8080';

const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Estamos acessando o servidor!");
})

server.listen(port, host, () =>{
    console.log("Server listening on port" + port);
})