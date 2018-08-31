// Function to test Jest
// const suma = require('./lib/mdLinks');

// function sum(elementA, elementB) {
//   return elementA + elementB;
// }
// module.exports = sum;

'use strict';

// Require nodejs modules
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const mdLinks = (path, options) => {
  return `${path} ${options}`;
};

module.exports = mdLinks;

// Allow to use the fs module
// const fs = require('fs');
// Allow to use the markdown-link-extractor module
// const markdownLinkExtractor = require('markdown-link-extractor');

// Call the md file and convert to string
// const markdown = fs.readFileSync('README.md').toString();
// console.log(markdown);

// Extract the links
// const links = markdownLinkExtractor(markdown);
// console.log(links.length);
// Display in console each link
// links.forEach(link => console.log(link));
