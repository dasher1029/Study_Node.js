const {name, age, stdnum, marriage} = require('./module1');

function tellInfo(){
    console.log(name, age, stdnum, marriage);
}

module.exports = tellInfo();