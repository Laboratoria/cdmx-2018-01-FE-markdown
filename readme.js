// let add = (a,b) => {
//     return a + b
// }



// // Entra al README.md
// let http = require('http'), // require 
// fs = require('fs'); // fs encargado de comunicarse con el sistema de archivos de la computadora.
// http.createServer((req,res)=>{
// fs.readFile('./README.md', callback = (err,md) =>{
//     res.write(md);
//     res.end();
// })  
// }).listen(8080);
let fs = require('fs');

const readFile = () =>{
    fs.readFile('./README.md', 'utf-8',callback = (err, md)=>{
        if (err) throw err
        console.log(md);
    })
}

readFile();

module.exports = {
    readFile
}
