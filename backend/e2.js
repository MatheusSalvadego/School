//Helper Function
function getAvg(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

//Verifica se a média é acima de 6
function media(n1, n2, n3) {
  if (getAvg(n1, n2, n3) >= 6) {
    console.log("Parabéns");
  }
}

//Verifica se o n é par
function isEven(n) {
  return n % 2 == 0;
}

//Obtem o maior numero
function max(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

//Obtem idade por ano de nascimento e o ano
function getAgeByYear(bornYear, year) {
  return year - bornYear;
}

//Só mostra as estações
function printStation() {
  let stations = ["Verão", "Primavera", "Outone", "Inverno"];
  for (const s in stations) {
    console.log(s);
  }
}

//Mostra tudo
media(10, 10, 5);
console.log(isEven(20));
console.log(max(5, 6));
console.log(getAgeByYear(2004, 2020));
