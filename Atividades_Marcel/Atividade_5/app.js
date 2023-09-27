/*************************************************************************
* Objetivo: Criar um sistema que gerencie números pares e ímpares
* Data: 27/09/2023
* Autor: Isabelly Santana
* Versão: 1.0
*************************************************************************/




// Função para verificar se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
  }
  
  // Importação do módulo readline para interação com o usuário
  // rl = foi usado para solicitar entradas do usuário no terminal e obter números iniciais e finais para calcular números pares e ímpares. 
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Solicitação de entrada de números iniciais e finais
  rl.question('Digite o número inicial: ', (numeroInicial) => {
    rl.question('Digite o número final: ', (numeroFinal) => {
      // Converte as entradas para números inteiros
      numeroInicial = parseInt(numeroInicial);
      numeroFinal = parseInt(numeroFinal);
  
      // Verifica se as entradas são válidas
      if (isNaN(numeroInicial) || isNaN(numeroFinal) || numeroInicial < 0 || numeroFinal < 0) {
        console.log('Entrada de dados inválida. Certifique-se de fornecer números inteiros positivos.');
        rl.close();
      } else if (numeroInicial > numeroFinal) {
        console.log('O número inicial não pode ser maior do que o número final.');
        rl.close();
      } else {
        const numerosPares = [];
        const numerosImpares = [];
  
        // Preencher os arrays com números pares e ímpares
        for (let i = numeroInicial; i <= numeroFinal; i++) {
          if (ehPar(i)) {
            numerosPares.push(i);
          } else {
            numerosImpares.push(i);
          }
        }
  
        console.log('Lista de números Pares:');
        console.log(numerosPares.join('\n'));
        console.log(`Qtde de números Pares encontrados: ${numerosPares.length}`);
  
        console.log('\nLista de números Ímpares:');
        console.log(numerosImpares.join('\n'));
        console.log(`Qtde de números Ímpares encontrados: ${numerosImpares.length}`);
  
        rl.close();
      }
    });
  });