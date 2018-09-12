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
const fetch = require('node-fetch');
// const request = require('request');

// Function to ensure that path is absolute
const checkPathToAbsolute = (pathToCheck) => {
  pathToCheck = path.resolve(pathToCheck);
  return pathToCheck;
};

// Function to check if a path exist
const checkIfPathExist = (absolutePath) => {
  return (!fs.existsSync(absolutePath)) ? false : true;
};

// Function to read the file
const readMarkdownFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

// Function to convert the md file to html
const convertMdToHtml = (readedFile) => {
  return md.render(readedFile);
};

// Function to get tags <a> from html file
const getTags = (htmlFile) => {
  const dom = new JSDOM(htmlFile);
  const linkTags = dom.window.document.getElementsByTagName('a');
  return linkTags;
};

// Function to get the basic info from each <a> tag
const getInfoTags = (tagsCollection, absolutePath, links, linkObj) => {
  Array.from(tagsCollection).forEach(tag => {
    linkObj = {
      href: tag.href,
      text: tag.text.slice(0, 50),
      file: absolutePath,
      status: '',
      statusText: ''
    };
    links.push(linkObj);
  });
  return links;
};

// Function to calculate unique links
const calculateUniqueLinks = (links) => {
  const urls = [];
  links.forEach(obj => {
    urls.push(obj.href);
  });
  const unique = urls.filter((item, pos) => {
    return urls.indexOf(item) === pos;
  });
  return unique.length;
};

// Function to process the answer and send it to the terminal
const processAnswer = (basicInfo) => {
  let returnedAnswer = '';
  basicInfo.forEach(element => {
    returnedAnswer += `${element.file}  ${element.href}  ${element.text}
`;
  });
  return returnedAnswer;
};

const printResult = (obj) => {
  return console.log(`${obj.file}  ${obj.href}  ${obj.statusText}   ${obj.status}  ${obj.text}`);
};

// Function to do a request to each URL
const doFetch = (basicInfo) => {
  basicInfo.forEach(obj => {
    fetch(obj.href)
      .then((res) => {
        obj.status = res.status;
        obj.statusText = (res.statusText === 'Not Found') ? 'Fail' : res.statusText;
        printResult(obj);
      })
      .catch((err) => {
        err = new Error('Not Found');
        err.status = 404;
        err.statusText = 'Fail';
        obj.status = err.status;
        obj.statusText = err.statusText;
        printResult(obj);
      });
  });
};

// Function to show the answer when an option is true
const processAnswerValidate = (basicInfo, options, uniqueLinks) => {
  const total = basicInfo.length;
  if (options.validate === true && options.stats === false) {
    doFetch(basicInfo);
    return 'Found links:';
  } else if (options.validate === false && options.stats === true) {
    return 'Total: ' + total + '\nUnique: ' + uniqueLinks;
  };
};

// Main function
const mdLinks = (path, options) => {
  const links = [];
  const linkObj = {};

  const absolutePath = checkPathToAbsolute(path);
  const fileExist = checkIfPathExist(absolutePath);
  if (fileExist === false) {
    return `The file ${absolutePath} don't exist`;
  } else {
    const readedFile = readMarkdownFile(absolutePath);
    const convertedFile = convertMdToHtml(readedFile);
    const tags = getTags(convertedFile);
    const basicInfo = getInfoTags(tags, path, links, linkObj);
    const uniqueLinks = calculateUniqueLinks(basicInfo);
    if (options.validate === false && options.stats === false) {
      return processAnswer(basicInfo);
    } else if (options.validate === true || options.stats === true) {
      return processAnswerValidate(basicInfo, options, uniqueLinks);
    }
  }
};

module.exports = mdLinks;
