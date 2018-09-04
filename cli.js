#!/usr/bin/env node
// Make the file executable

// Require yargs
const yargs = require('yargs');

// Parse the arguments passed through CLI using yargs
let argv = yargs
  .command({
    command: '<path>',
    strict: 'true'
  })
  .demandCommand(1, 1, 'ERROR: You need a path to run mdLinks', 'ERROR: Write the path without spaces')
  .options({
    '_': {
      type: 'string',
      description: 'Path to search markdown in',
      demandOption: 'true',
    },
    'validate': {
      type: 'boolean',
      default: 'false',
      description: 'Valida los links encontrados en el archivo markdown'
    },
    'stats': {
      type: 'boolean',
      default: 'false',
      description: 'Muestra estadisticas básicas sobre los links encotrados en el archivo markdown'
    }
  })
  .help()
  .check((argv)=>{
    if (Object.keys(argv).length <= 4) {
      return true;
    } else {
      throw (new Error('ERROR: Invalid option'));
    }
  })
  .argv;

// Save the path passed through CLI
const path = argv._[0];
const options = {
  'validate': argv.validate,
  'stats': argv.stats
};

// console.log(options);


const mdLinks = require('./index');


const execute = mdLinks(path, options);
console.log(execute);
