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
app.get("/images/iconopersona.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/iconopersona.jpg'));
});
//Enviamos la pagina principal
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'index.html'));
});

var server = http.listen(8080,()=>{
    console.log("Servidor corriendo en el puerto:",
    server.address().port);
})


//Enviamos los datos del personal
app.get("/personal/1",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal1.html'));
});
app.get("/personal/2",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal2.html'));
});
app.get("/personal/3",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal3.html'));
});
app.get("/personal/4",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal4.html'));
});
app.get("/personal/5",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal5.html'));
});
app.get("/personal/6",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal6.html'));
});
app.get("/personal/7",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal7.html'));
});
app.get("/personal/8",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal8.html'));
});
app.get("/personal/9",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal9.html'));
});
app.get("/personal/10",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal10.html'));
});