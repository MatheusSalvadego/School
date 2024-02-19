// 1

function displayNameAndAge(name, age) {
  console.log("Olá, meu nome é", name, "e eu tenho", age, "anos de idade");
}

const nome = "Matheus";
let age = 16;
displayNameAndAge(nome, age);

// 2
let navegador = "Firefox";
let ideOfChoice = "NeoVim";
let bestLanguage = "Rust";
display(navegador, ideOfChoice, bestLanguage);

// 3
let vimIsTheBestIDE = true;
let VSCodeIsTheBestIDE = false;
display(vimIsTheBestIDE, VSCodeIsTheBestIDE);

// 4
let friends = undefined;
let windows = undefined;
display(friends, windows);

// 5
let equal = Symbol("==");
let bigger = Symbol(">");
let smaller = Symbol("<");
let biggerOrEqual = Symbol(">=");
let smallerOrEqual = Symbol("<=");
display(equal, bigger, smaller, biggerOrEqual, smallerOrEqual);

// 6
let smallestNumberAllowed = BigInt(-9.0071993e15);
let biggestNumberAllowed = BigInt(9.0071993e15);
let medium = BigInt(0);
display(smallestNumberAllowed, biggestNumberAllowed, medium);

//Helper Function
function display(...args) {
  console.log(args);
}
