let fs = require("fs");
// Funcion encargada de leer
const readFile = () =>{
    fs.readFile('./README.md', 'utf-8',callback = (err, md)=>{
        if (err) {
            console.log('Tienes un error, verifica'); 
        }else {
            let data = md;
            let regExp = /((http:\/\/|https:\/\/|www\.)[^\s]+)/gim;
            let results = data.match(regExp)
         console.log(results);   
        }
    })
}
readFile();

module.exports = {
    readFile
}
