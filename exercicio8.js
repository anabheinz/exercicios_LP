console.log("----- Conversão de Temperatura de Celsius para Fahrenheit -----")

const prompt = require('prompt-sync')();

let tempCelsius = Number(prompt("Qual a temperatura em graus Celsius? "));

let tempFahrenheit = 1.8*tempCelsius + 32

console.log(tempCelsius +"°C equivale a " + tempFahrenheit + "°F");