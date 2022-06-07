// esse foi um exemplo da aula. para rodar o código, precisei antes fazer $npm install dog-names
// forma de importar coisas de outro módulos
const dogNames = require('dog-names');

console.log(dogNames.femaleRandom());

// pode desestruturar
const {femaleRandom} = require('dog-names');

console.log(femaleRandom());