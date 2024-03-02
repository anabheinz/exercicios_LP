// ---- Descrição Narrativa ----
// Primeiro Passo: Solicilitar o valor do raio do círculo
// Segundo Passo: Realizar o cálculo da área e da circunferência
// Terceiro Passo: Exibir resultado

console.log("----- Área e Circunferência do Círculo -----")

const prompt = require('prompt-sync')();

const pi = 3.14

let raio = Number(prompt("Qual o raio do círculo? "));

let area = (pi)*(raio**2);
let circun = 2*pi*raio;

console.log("A área do círculo é: " + area + " e a circunferência é " + circun);