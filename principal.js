var express = require('express')
const bodyParser = require('body-parser')
const { socket } = require('socket.io')
const { emit } = require('process')
const path = require("path");
var app = express().use(bodyParser.json());
var http = require('http').Server(app)
var io = require('socket.io')(http)

//empezamos enviando los estilos de css
app.get("/css/normalize.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./css/normalize.css'));
});
app.get("/css/estilos.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./css/estilos.css'));
});
//Enviamos las imagenes
app.get("/images/arrog.svg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/arrog.svg'));
});
app.get("/images/left.svg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/left.svg'));
});
app.get("/images/logo.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/logo.jpg'));
});
app.get("/images/menu.svg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/menu.svg'));
});
app.get("/images/promocion1.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion1.jpg'));
});
app.get("/images/promocion2.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion2.jpg'));
});
app.get("/images/promociones.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promociones.jpg'));
});
app.get("/images/redessociales.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/redessociales.jpg'));
});
app.get("/images/rigth.svg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/rigth.svg'));
});
//Enviamos la pagina principal
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'index.html'));
});

var server = http.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto:",
    server.address().port);
})
