const express = require('express');
const app=express();
const path=require('path');

app.listen(3030, ()=>console.log('servidor corriendo en puerto 3030'));

app.get('/',(req, res)=> res.sendFile(path.join(__dirname,'/index.html')));
app.get('/user',(req, res)=> res.send("Hola Usuario"));