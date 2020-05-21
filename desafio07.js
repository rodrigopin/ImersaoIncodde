let listaTimes = require("./times");

const express = require("express");
const bodyParser = require("body-parser");

const server = express();

const port = 8080;

server.listen(port, () => {
    console.log("Servidor rodando na porta" + port);
});

server.get('/ping', (req, res) => {
    res.status(200).send({
        pong: "true"
    })
})

server.get('/times', (req, res) => {
    res.status(200).send({
        times:listaTimes
    })
})
server.post('/times', (req,res) => {
    if(!req.body.nome){
        res.status(400).send("O time precisa de um nome");
    } else {
        const times = {
            "id": listaTimes.length + 1,
            "nome": req.body.nome
        }
        listaTimes.push(times);
        res.status(200).send("Time adicionado");
    }
});
// 1 parametro -> rota
// 2 parametro -> instrucoes com req e res
server.delete('/times', (req, res) => {
    const id = req.body.id - 1;
    listaTimes.splice(id,1);
    res.status(200).send("Time removido");
})
