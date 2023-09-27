/**************************************************************
 * Objeitvo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 27/09/2023
 * Autor: Isabelly santana
 * Versão; 1.0
 ***************************************************************/


//Função para calcular a tabuada de um número específico
function calcularTabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Calcula a tabuada do 2
console.log('Tabuada do [2]');
calcularTabuada(2);

// Calcula a tabuada do 3
console.log('\nTabuada do [3]');
calcularTabuada(3);