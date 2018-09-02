#!/usr/bin/env node

const [,, ...args] = process.argv;

// console.log('Hello world ${args}');

const mdLinks = require('./README.md', 'index.js');