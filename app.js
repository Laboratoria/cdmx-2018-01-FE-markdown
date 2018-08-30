var http = require("http");

var manejador = function(solicitud,respuesta){
console.log("recibimos una nueva peticion");
respuesta.end("hola mundo");
};
//decirle en que puerto se ejecuta
//retorna un objeto 
var servidor = http.createServer(manejador);
servidor.listen(8080);

