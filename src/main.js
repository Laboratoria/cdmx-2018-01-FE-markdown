// aqui se va a implementar las funciones

const files = require('fs');
//llamo a la api
const path = require('path');

const lineCount = (urlResult) =>{
    files.readFile(urlResult,'utf8',(err, data) =>{
  if (err){
      console.log(err);
      return 'error';
  }else{
      //saltos de linea \n
      const lines = data.split('\n')
        // console.log(lines);

      lines.forEach(element => {

      let expresion = new RegExp(/\[.{2,}\]\(.{2,}\)\W/g);
      let newExpresion = element.match(expresion);        
          console.log(newExpresion);
          
      });
      // console.log(lines + ' ' +'lines')
      // console.log(lines);
      // return lines + ' '+'lines'
           
    }
});
}

//definiendo una ruta absolutas
const validatePath = (pathrout)=>{
    console.log(typeof pathrout);
    if(!path.isAbsolute(pathrout)) {
        const urlResult = path.resolve(pathrout)
         //console.log( urlResult);
         lineCount(urlResult)
    }
}

validatePath('./src/README.md');

 




module.exports = {
    lineCount, 
    validatePath
}; 

