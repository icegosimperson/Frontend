const locationOne = { 
    country: 'koread',  
};
const locationTwo = {
    conuntry: 'korea',
};

const jsonLocation1 = JSON.stringify(locationOne);
console.log(jsonLocation1);

const jsonLocation2 = JSON.stringify(locationTwo);
console.log(jsonLocation2);

console.log(locationOne === locationTwo);
