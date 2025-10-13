const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;


/*이 코드는 다음의 코드와 같은 효과를 가짐
const node = 'nodejs';
const obj = {};
const bool = true;
*/