const fs = require('fs');

const readStream = fs.createReadStream('a.txt');
const writeStream = fs.createWriteStream('helloworld.txt');

readStream.pipe(writeStream);

//hello? 