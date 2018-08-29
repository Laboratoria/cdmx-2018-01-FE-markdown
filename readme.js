let fs = require("fs");
// Funcion encargada de leer
const readFile = () =>{
    fs.readFile('./README.md', 'utf-8',callback = (err, md)=>{
        if (err) {
            console.log('Tienes un error, verifica'); 
        }else {
         console.log(md);   
        }
    })
}
readFile();

module.exports = {
    readFile
}
