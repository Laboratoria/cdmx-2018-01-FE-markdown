const argv = require('yargs')
.command('options', 'Opciones para validar los links', {
  validate: {
    alias: 'va'
  },
  stats : {
    alias: 'sta'
  }
})
.argv;

const { mdLink } = require('./js/md-links.js');

//"jsdom": "^12.0.0"
let options = 'default';
let path = './textprob.md';
;

if (argv.validate) {
  console.log('argv: validate');
} else if (argv.stats) {
  console.log('argv: stats');
} else {
  mdLink(path)
  .then(archivo =>  console.log('Option de default'))
  .catch(console.error());
}

//Primera función
// mdLink(path)
// .then(archivo =>  console.log(archivo))
// .catch(console.error());
