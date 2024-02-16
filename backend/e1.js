//
// Usado para guardar valores previamente calculados
let cache = new Map();

//Calcula o fib de n
function fib(n) {
  if (cache.has(n)) {
    return cache.get(n);
  }

  let result;

  if (n < 2) {
    result = n;
  } else {
    result = fib(n - 1) + fib(n - 2);
    cache.set(n, result);
  }

  return result;
}

//Exercisio 1 -> Some 4 números
function sum(a, b, c, d) {
  return a + b + c + d;
}

//Exercisio 2 -> Calcule idade por ano
function getAgeByYear(year) {
  return new Date().getFullYear() - year;
}

//Exercisio 3 -> Calcule a média de 3 notas
function getAvg(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

//Loga tudo no console
console.log(fib(10));
console.log(sum(10, 10, 20, 20));
console.log(getAgeByYear(2007));
console.log(getAvg(10, 10, 8));
