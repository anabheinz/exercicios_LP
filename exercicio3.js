
console.log("Área de Retângulo")

const prompt = require('prompt-sync')();

let base = Number(prompt("Qual a base do retângulo? "));

let altura = Number(prompt("Qual a altura do retângulo? "));

let area = (base * altura);

console.log("A área do retângulo é: " + area);
