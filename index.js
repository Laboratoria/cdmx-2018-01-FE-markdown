let add = (a,b) => {
    return a + b
}

module.exports = {
    add
}

var http = require('http'),
fs = require('fs'); // encargado de comunicarse con el sistema de archivos de la computadora.
http.createServer((req,res)=>{
fs.readFile('./README.md', callback = (err,md) =>{
    res.write(md);
    res.end();
})  
}).listen(8080);