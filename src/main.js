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

// const validateUrl = (err,newUrl) => {
//     console.log(newUrl);
    
// }
// console.log(newUrl);

function validate(newUrl){
   
    
    newUrl.forEach(element =>{
        console.log(element);
    //   fetch(element).then(function(response){
    //       console.log(response.status);
          

      });
        
    
    
// fetch(newUrl).then(response => console.log(response.status))

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
        return newUrl;
         }              
        }); 
    //   console.log(newUrl);
    //   validateUrl(newUrl);
    validate(newUrl);
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
    validate
}; 

