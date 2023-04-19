//Buenas profe, tuve que ir chihuahua para llegar a mi papa y no pude estar en la clase de este archivo, me avisaron que podia hacer el repositorio mas tarde
//*****************
//Llamamos el modulo http
const http = require('http');
//Establecemos la url o IP de nuestro servidor
const hostname = '192.168.1.36';
//Establecemos el puerto donde se escucha
const port = 3000;
//Creamos una instancia HHTP con un request y un response
const server = http.createServer((req,res)=>{
    //El servidor respondera con un codigo 200
    res.statusCode=200;
    //El servidor respondera con un texto plano
    res.setHeader('Content-Type','text/plain');
    //El servidor respondera el mensaje hola mundo
    res.end('Hola mundo\n');
});

server.listen(port,hostname, ()=>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
})
