console.log("----- Cálculo de IMC -----")

const prompt = require('prompt-sync')();

let peso = Number(prompt("Qual o seu peso em kg? "));
let altura = Number(prompt("Qual altura em metros? "));

let imc = peso/(altura)**2

console.log("Seu IMC é : " + imc);