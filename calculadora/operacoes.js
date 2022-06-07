const sun = (num1, num2) => console.log(`A operação ${num1} + ${num2} é igual a ${num1 + num2}`);

const sub = (num1, num2) => console.log(`A operação ${num1} - ${num2} é igual a ${num1 - num2}`);

const  multi = (num1, num2) => console.log(`A operação ${num1} x ${num2} é igual a ${num1 * num2}`);

const div = (num1, num2) => console.log(`A operação ${num1} / ${num2} é igual a ${num1 / num2}`);


module.exports = {
  sun,
  sub,
  multi,
  div
}