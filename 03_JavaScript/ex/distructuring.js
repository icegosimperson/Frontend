const user = {
    id: 1,
    name: 'tetz',
    email: 'hnmdm@naver.com',
};

// const id = user.id;
// const name = user.name;
// const email = user.email;

const {id, name, email} = user;
console.log(id, name, email);

const fruits = ["수박", "딸기", "바나나"];
const [a, b, c] = fruits;
console.log(a, b, c);

console.log(fruits);
console.log(...fruits);

function conLog(a, b, c){
    console.log(a, b, c);
}

conLog(fruits[0], fruits[1], fruits[2]);
conLog(...fruits);

const string = 'apple';
const strArr = string.split("");
const strArr2 = [...string];
console.log(strArr);
console.log(strArr2);

const arr = [1, 2, 3, 4];
const copyArr = arr;
const hardCopyArr = [...arr];

console.log(arr===copyArr);
console.log(arr===hardCopyArr);

const person = {name: "김은지", age:24};
const job = {title:"개발자", company:'구글'};

const profile = {
    ...person,
    ...job,
    location:'인천',
}

console.log(profile);