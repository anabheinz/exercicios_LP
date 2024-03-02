
console.log("----- Volume de uma esfera -----")

const prompt = require('prompt-sync')();

let raio = Number(prompt("Qual o raio da esfera? "));
const pi = 3.14;

let volume = (4 * pi * raio**3) / 3;

console.log("O volume da esfera é : " + volume);