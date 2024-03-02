
console.log("----- Distância entre dois pontos no plano cartesiano -----")

const prompt = require('prompt-sync')();

let x1 = Number(prompt("Qual o valor de x1? "));
let x2 = Number(prompt("Qual o valor de x2? "));

let y1 = Number(prompt("Qual o valor de y1? "));
let y2 = Number(prompt("Qual o valor de y2? "));

let distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

console.log("A distância entre os dois pontos é : " + distancia);