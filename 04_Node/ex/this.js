const sayHello = () => {
    console.log(`Hello, I'm ${this}`);  // 동적 상황에서 많이 사용
};
const boy = {
    name : 'Mike',
    sayHello,
};

const girl = {
    name: 'Jane',
    sayHello,
};

boy.sayHello();
girl.sayHello();