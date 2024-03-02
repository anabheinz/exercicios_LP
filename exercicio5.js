// ---- Descrição Narrativa ----
// Primeiro Passo: Solicilitar o valor da aresta do cubo
// Segundo Passo: Realizar o cálculo do volume
// Terceiro Passo: Exibir resultado

console.log("----- Volume de um cubo -----")

const prompt = require('prompt-sync')();

let aresta = Number(prompt("Qual a aresta do cubo? "));

let volume = (aresta)*(aresta)*(aresta);

console.log("O volume do cubo é : " + volume);