/*************************************************************************
* Objetivo: Um consultório de Nutrição solicitou a você que criasse um sistema 
que faça o cálculo do IMC de uma pessoa
* Data: 27/09/2023
* Autor: Isabelly Santana
* Versão: 1.0
*************************************************************************/


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu peso (kg): ', (peso) => {
  rl.question('Digite sua altura (m): ', (altura) => {
    const imc = (peso / (altura * altura)).toFixed(2);
    console.log(`Seu IMC é: ${imc}`);
    
    rl.close();
  });
});