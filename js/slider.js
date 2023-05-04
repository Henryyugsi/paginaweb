var express = require('express')
const bodyParser = require('body-parser')
const { socket } = require('socket.io')
const { emit } = require('process')
const path = require("path");
var app = express().use(bodyParser.json());
var http = require('http').Server(app)
var io = require('socket.io')(http)

//Enviamos la pagina principal
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'index.html'));
});

var server = http.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto:",
    server.address().port);
})

    



