// Algoritmo de prueba
//"jsdom": "^12.0.0"
const fs = require('fs');
const marked = require('marked');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const readfil =(callback)=> {
  fs.readFile('./textprob.md', 'utf8', (err, data) => {
    if (err) throw err
    callback(data)

  });
}

let data = fs.readFileSync('./textprob.md', 'utf8');
const tokens = marked.lexer(data);
const html = marked.parser(tokens);
//console.log(html);
const dom = new JSDOM(html);
let links = dom.window.document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
  console.log(links[i].href);
  console.log(`Nombre del links: ${links[i].textContent }`);
  }

  console.log(`Hay ${ links.length } Links en el documento`);
