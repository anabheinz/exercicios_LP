const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite um número: "));

let n2 = Number(prompt("Digite outro número: "));

let media = (n1 + n2)/2;

console.log("A média dos números é: " + media);