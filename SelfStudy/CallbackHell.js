const random = function(){ //짝수: true, 홀수: false 
    if ((Math.random() * 10) % 2 == 1){
        return false;
    }
    else{
        return true;
    }
}

const condition = random();
const promise = new Promise((resolve, reject) => {
    if (condition){
        resolve('성공! 집가자!');
    }else{
        reject('실패. 공부 더 하자!');
    }
});

promise
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
})
.finally(() => {
    console.log('숨쉬기');
})

