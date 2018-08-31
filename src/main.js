// aqui se va a implementar las funciones

const files = require('fs');
const path = require('path');


const validateUrl = (url)=>{
    if(path.isAbsolute(url) != true) {
        console.log(url);
        let urlResult = path.resolve(url)
         console.log( urlResult);
    }
}
validateUrl();

files.readFile('README.md', 'utf8')
 const lineCount = (err, data) =>{
    if (err){
        console.log(err);
        return 'error';
    }else{
        let lines = data.split('\n').length
        console.log(lines + ' ' +'lines')
        return lines + ' '+'lines'
        
    }
}
files.readFile('README.md', 'utf8',lineCount)


module.exports = {
    lineCount, 
    validateUrl
}; 


