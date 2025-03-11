function add (a, b) {
    return a + b;
}
const add2 = function(a, b){
    return a+b;
};

const add3 = (a, b) =>{
    return a+b;
};
function toUpperCase (str)  {
    return str.toUpperCase();
};
const toUpperCase = (str) => {
    return str.toUpperCase();
};

function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};