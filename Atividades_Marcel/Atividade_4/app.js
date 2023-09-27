/*************************************************************************
* Objetivo: Calcular o Fatorial de um número fornecido pelo usuário
* Data: 27/09/2023
* Autor: Isabelly Santana
* Versão: 1.0
*************************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFatorial(numero) {
  if (numero < 0) {
    return 'Não existe fatorial de número negativo.';
  }
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

rl.question('Digite um número para calcular o fatorial: ', (numeroDigitado) => {
  const numero = parseInt(numeroDigitado);

  if (isNaN(numero) || numero < 0) {
    console.log('Entrada inválida. Forneça um número inteiro não negativo.');
  } else if (numero === 0 || numero === 1) {
    console.log(`O fatorial de ${numero} é 1`);
  } else {
    const resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}`);
  }

  rl.close();
});