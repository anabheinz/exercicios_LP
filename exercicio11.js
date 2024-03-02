console.log("-----Conversão de Quilômetros para Milhas -----")

const prompt = require('prompt-sync')();

let distQuilometro = Number(prompt("Qual a distância em quilômetros ? "));

let conversao = (distQuilometro) / 1.609

console.log("A distância em milhas é de : " + conversao);