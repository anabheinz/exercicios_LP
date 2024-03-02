console.log("----- Perímetro de um triângulo -----")

const prompt = require('prompt-sync')();

let lado1 = Number(prompt("Qual o primeiro lado do triângulo? "));
let lado2 = Number(prompt("Qual o segundo lado do triângulo? "));
let lado3 = Number(prompt("Quantos o terceiro lado do triângulo? "));

let perimetro = lado1 + lado2 + lado3

console.log("O perímetro do triângulo é: " + perimetro);