console.log("----- Cálculo de juros simples -----")

const prompt = require('prompt-sync')();

let montante = Number(prompt("Qual o montante? "));
let taxaJuros = Number(prompt("Qual o percentual de juros? "));
let tempo = Number(prompt("Quantos anos? "));

let juros = (montante * taxaJuros * tempo) / 100

console.log("O juros simples ganho é de: " + juros);