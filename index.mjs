import {odd, even} from './var,mjs';
import chechNumber from './func.mjs';

function checkStringOddOrEven(str){
    if (str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
