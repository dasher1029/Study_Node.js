const user = {name: 'taehoon', age: 23, job: 'student'};
const {name: userName, age, job} = user;
console.log(userName);
console.log(age);
console.log(job);

/*
let asdf = {a: 'bober', b: 99, job: 'ja pierdole!'};
asdf.forEach(function(asdf){
    console.log(asdf);
})*/

let array = ['bober', 'kurwa', 'ja pierdole!'];
array.forEach(function(words){
    console.log(words);
})

array.forEach((words) => {
    console.log(words);
})