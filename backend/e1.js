let cache = new Map();

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

function sum(a, b, c, d) {
  return a + b + c + d;
}

function getAgeByYear(year) {
  return new Date().getFullYear() - year;
}

function getAvg(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

console.log(fib(10));
console.log(sum(10, 10, 20, 20));
console.log(getAgeByYear(2007));
console.log(getAvg(10, 10, 8));
