
console.log("----- Cálculo de Consumo de Combustível -----")

const prompt = require('prompt-sync')();

let distancia = Number(prompt("Qual a distância percorrida (em km)? "));
let gasolina = Number(prompt("Quantos litros de combustível foram consumidos? "));

let consumoMedio = (distancia/gasolina)

console.log("O consumo médio de combustível é " + consumoMedio + " km/l.");