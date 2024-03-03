console.log("----- Duração de uma viagem -----");

const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Qual a a velocidade média (em km/h)? "));
let distancia = Number(prompt("Qual a distância percorrida (em km)? "));    

let duracaoViagem = distancia/velocidade;

console.log("A duração estimada da viagem é " + duracaoViagem + " horas.");