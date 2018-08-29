const fs = require('fs');
const fetch = require('node-fetch')
        
fs.readFile('README.md', 'utf8', function(err, data) {  
    if (err) throw err;
    let content = '';
    for(let i = 0; i < data.length; i++) {
        let allData = data[i];
        content += allData        
    }
    const validate = () => {
        let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
        let found = content.match(regex);
        if (found) {
            for (let i = 0; i < found.length; i++) {
                let request = found[i]
                //console.log(request);
            fetch(request).then((result) => {
                let status = result.status
                //console.log(status);
                if (status === 200) {
                    console.log('OK')
                } else {
                    console.log('FAIL')
                }
                return status
            }).catch((err) => {
                console.log(err.message);
                })
            
            }
        }
    }
validate();
});
