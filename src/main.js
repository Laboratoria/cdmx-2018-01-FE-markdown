// aqui se va a implementar las funciones

const files = require('fs');
//llamo a la api
const path = require('path');

//definiendo una ruta absolutas
const validatePath = (pathrout)=>{
    console.log(typeof pathrout);
    if(!path.isAbsolute(pathrout)) {
        const urlResult = path.resolve(pathrout)
         console.log( urlResult);
    }
}

validatePath('README.md');

 const lineCount = (err, data) =>{
    if (err){
        console.log(err);
        return 'error';
    }else{
        //saltos de linea \n
        const lines = data.split('\n').length
        console.log(data);
        console.log(lines + ' ' +'lines')
        return lines + ' '+'lines'
        
    };
};

files.readFile('README.md', 'utf8',lineCount)


module.exports = {
    lineCount, 
    validatePath
}; 


