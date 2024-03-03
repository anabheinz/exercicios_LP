
console.log("----- Conversão de Horas para Segundos -----")

const prompt = require('prompt-sync')();

let horas = Number(prompt("Quantas horas? "));
let segundos = horas*60*60;

console.log("O tempo em segundo é " + segundos);