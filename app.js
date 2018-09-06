
const match= url.match(/^https?:\/\/(www.\.[\w-]+\w{2,6})\/?/)
console.log(match);
const readFileMd = () => {
  fs.readFile('./README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      // console.log(data);
      let regEx = /(http:\/\/|https:\/\/|www\.)[^\s][^)]+/g;
      let newArray = data.match(regEx);
    console.log(newArray);};
        });
      };    // 