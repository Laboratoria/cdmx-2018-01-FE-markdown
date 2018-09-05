'use strict';

// Require nodejs modules
const fs = require('fs'); // Allow to use the fs module
const path = require('path'); // Allow to use the path module
const markdownIt = require('markdown-it'); // Allow to use markdown-it library
// Create a new MarkdownIt with the rules that allow convert the text into links
const md = new markdownIt({
  html: true, // Enable HTML tags in source
  linkify: true // Autoconvert URL-like text to links
});
const jsdom = require('jsdom'); // Allow to use jsdom library
const { JSDOM } = jsdom; // Simulate a new DOM and allow us to work with it
// const fetch = require('node-fetch');

// Function to ensure that path is absolute
const checkPathToAbsolute = (pathToCheck) => {
  pathToCheck = path.resolve(pathToCheck);
  return pathToCheck;
};

// Function to check if a path exist
const checkIfPathExist = (absolutePath) => {
  if (fs.existsSync(absolutePath)) {
    return true;
  } else {
    return false;
  };
};

const readMarkdownFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

const convertMdToHtml = (readedFile) => {
  return md.render(readedFile);
};

const getTags = (htmlFile) => {
  const dom = new JSDOM(htmlFile);
  const linkTags = dom.window.document.getElementsByTagName('a');
  return linkTags;
};

const getInfoTags = (tagsCollection, absolutePath, links, linkObj) => {
  Array.from(tagsCollection).forEach(tag => {
    // console.log(`${tag.href} + ${tag.text}`);
    linkObj = {
      href: tag.href,
      text: tag.text.slice(0, 50),
      file: absolutePath
    };
    links.push(linkObj);
  });
  return links;
};

const processAnswer = (basicInfo) => {
  let returnedAnswer = '';
  basicInfo.forEach(element => {
    returnedAnswer += `${element.file}  ${element.href}  ${element.text}
`;
  });
  return returnedAnswer;
};

const validateLinks = (linksArray) => {
  // linksArray.
};

const mdLinks = (path, options) => {
  const links = [];
  const linkObj = {};

  const absolutePath = checkPathToAbsolute(path);
  // console.log(`The absolute path is: ${absolutePath}`);
  checkIfPathExist(absolutePath);
  // const pathExist = checkIfPathExist(absolutePath);
  // console.log('The path exist? ' + pathExist);

  const readedFile = readMarkdownFile(absolutePath);
  const convertedFile = convertMdToHtml(readedFile);
  const tags = getTags(convertedFile);
  const basicInfo = getInfoTags(tags, path, links, linkObj);
  const answer = processAnswer(basicInfo);
  if (options.validate === false && options.stats === false) {
    return answer;
  } else if (options.validate === true && options.stats === false) {
    answer = validateLinks(answer);
  }
  // console.log(basicInfo);

  // console.log(readedFile);
  // console.log(convertedFile);

  return answer;
};

module.exports = mdLinks;


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
