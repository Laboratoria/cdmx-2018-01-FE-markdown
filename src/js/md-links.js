const fs = require('fs');
const marked = require('marked');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const mdLink = (path) => {
// Retornaremos una promesa con la función

return new Promise((resolve, reject) => {
const data = fs.readFileSync(path, 'utf8');
const tokens = marked.lexer(data);
const html = marked.parser(tokens);
const dom = new JSDOM(html);
let links = dom.window.document.querySelectorAll('a');

let dataLinks = {};
let arrayData = [];
for (let i = 0; i < links.length; i++) {
    dataLinks = {
    href : links[i].href,
    text: links[i].textContent,
    file: path
  }

  arrayData.push(dataLinks);
  }

  console.log(arrayData);

});
};

module.exports = {
  mdLink
}
