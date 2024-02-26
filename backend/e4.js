const prompt = require("prompt-sync")();

/*
Exercício 1
Crie uma função que exibe uma mensagem de boas-vindas ao usuário quando a página for carregada. Utilize essa função para personalizar a experiência de cada usuário.
*/

let nome = prompt("Seu nome? ");
function exibe(n) {
  console.log(n);
}
exibe(nome);

/*
Exercício 2
Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
*/

function isEven(num) {
  return num % 2 == 0;
}
console.log(isEven(10));

/*
Exercício 3
Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números.
*/

function avgOfArray(arr) {
  let result = 0;
  arr.forEach((n) => {
    result += n;
  });
  return result / arr.length;
}
console.log(avgOfArray([10, 9, 8, 9]));

/*
Exercício 4
Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.
*/

function upperCase(str) {
  return str.toUpperCase();
}
console.log(upperCase("sap"));

/*
Exercício 5
Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
*/

function isPrime(num) {
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(13));

/*
Exercício 6
Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
*/

function reverse(arr) {
  let tempArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tempArr.push(arr[i]);
  }
  return tempArr;
}

console.log(reverse([1, 2, 3, 4, 5]));

/*
Exercício 7
Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada.
*/

function addPercentageToNum(num, percentage) {
  return (num += (percentage / 100) * num);
}
console.log(addPercentageToNum(300, 20));

/*
Exercício 8
Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa). Retorne true se for um palíndromo e false se não for.
*/

function isPalindrome(str) {
  return str.toLowerCase() == reverseString(str.toLowerCase());
}

function reverseString(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp = str[i] + temp;
  }
  return temp;
}

console.log(isPalindrome("Ovo"));

/*
Exercício 9
Implemente uma função que receba um número como parâmetro e retorne sua representação binária. Utilize essa função para converter diferentes números em binário.
*/

function toBinary(num) {
  return num.toString(2);
}
console.log(toBinary(5));

/*
Exercício 10
Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.
*/

function factorial(n) {
  let temp = 1;
  for (let i = n; i > 0; i--) {
    temp *= i;
  }
  return temp;
}
console.log(factorial(5));
