// export const animals = ['dog', 'cat']; 

// const { showAnimals } = require("./animals.js");

// export function showAnimals(){
//     animals.map((el) => console.log(el));
// }

// function shallowAnimals(){
//     animals.map((el) => console.log(el));
// }


// export { animals as ani, showAnimals as show };

const animals = {
    animals: ['dog', 'cat'],
    showAnimals(){
        this.animals.map((el) => console.log(el));
    },
};
export default animals;