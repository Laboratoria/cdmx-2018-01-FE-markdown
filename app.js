const fs = require('fs');
const path = require('path');

const ruta = (data) => {
  if (!path.isAbsolute(data)) {
    let fileAbsolut = path.resolve(data);
  
    fs.readFile(fileAbsolut, 'utf8', function(err, data) {
      if (err) {
        console.log('sin archivo');
      } else {
        const line = data.split('\n');
        for (let i = 0; i < line.length; i++) {
          const lines = line[i];
         // console.log();
        }
      }
    });
  }
};

ruta('./README.md');
