const fs = require('fs');
// const path = require('path');
const resolve = require('path').resolve;
// './README.md'
// let path = './README.md';

// Resolver ruta parcial a absoluta
const mdLinks = (callback) => {
  fs.readFile('./README.md', 'utf8', (err, data) =>{
    if (err) {
      console.log('Error');
    } else if (path.isAbsolute() !== true) {
      resolve(path);
    } else {
      callback(data);
      reading(data);
    }
  });
};
// } else {
//   
// }
readingFile(callback = (data) => console.log(data));

const newArr = [];
const reading = (data) =>{
  console.log(typeof(data));
  // String 
  let fileToArr = data.split();
  console.log(typeof(fileToArr));

  // fileToArr.forEach(line => {
  //   let matcher = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
  //   if (line === line.match(matcher)) {
  //     newArr.push(line);
  //   } else {
  //  throw new Error('Line not valid');
  // }
  // }
};

// reading();
module.exports = {
  mdLinks,
};

// Enviar data a un for para iterar por cada índice comparar con match
// Si coincide, enviar a arreglo nuevo
// Imprimir arreglo

// function is_url(str) {
//   regexp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
//   if (regexp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(is_url('https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php'));


