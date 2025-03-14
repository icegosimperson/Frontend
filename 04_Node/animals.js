// const animals = ['dog', 'cat'];

exports.animals = animals;

// exports.showAnimals = function showAnimals(){
//     animals.map(function(){
//         console.log('~el:', el);
//     })
// }

const animals = {
    animals: ['dog', 'cat'],
    showAnimals() {
        this.animals.map((el) => console.log(el)); 
    },
};

export default animals;