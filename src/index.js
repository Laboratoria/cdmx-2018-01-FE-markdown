const fs = require('fs');
const path = require('path');
// const resolve = require('path').resolve;

// Resolver ruta parcial a absoluta
// if (path.isAbsolute() === true) {
const readingFile = (callback) => {
  fs.readFile('./README.md', 'utf8', (err, data) =>{
    if (err) {
      console.log('Error');
    } else {
      callback(data); 
    }
  });
};

readingFile(callback = (data) => console.log(data));
// } else {
//   resolve(path);
// }

// let newArr = [];
// const reading = (data) =>{
//   for (i = 0; i < data.length; i++) {
//     let string = data[i];  
//     let matcher = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
//     if (string === matcher) {
//       string.push(newArr);
//     }
//   }
// };

// reading();

// const callback = (file) =>{
//   console.log(typeof(file));
// };

// callback();


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

// const url = require('url');
// const myURL =
//   url.parse('https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php');
// console.log(myURL);


