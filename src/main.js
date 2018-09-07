// aqui se va a implementar las funciones

const files = require('fs');
//llamo a la api
const path = require('path');

// const validate = (err, url) => {
//     console.log(url);
    
// // if (err){
// //     console.log('error');
// // }else(url =  )

// }

const generateNewArrayUrl = (err,url) => {
    //console.log(url);
    
}


const lineCount = (urlResult) =>{
    let newUrl = []; 
    files.readFile(urlResult,'utf8',(err, data) =>{
  if (err){
      console.log(err);
      return 'error';
  }else{
      //saltos de linea \n
      const lines = data.split('\n');
      lines.forEach(element => {
      const expresion = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g);
      while(element.match(expresion) !== null){
        newUrl.push(element.match(expresion));  
        break; 
         }        
      });      
      console.log(newUrl);
      generateNewArrayUrl(newUrl)
       return lines + ' '+'lines'     
    }
    
});
}




//definiendo una ruta absolutas
const validatePath = (pathrout)=>{
    // console.log(typeof pathrout);
    if(!path.isAbsolute(pathrout)) {
        const urlResult = path.resolve(pathrout)
         //console.log( urlResult);
         lineCount(urlResult)
    }
}

validatePath('./src/README.md');

 




module.exports = {
    lineCount, 
    validatePath,
    generateNewArrayUrl
}; 

