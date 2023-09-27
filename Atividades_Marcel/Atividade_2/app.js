/*************************************************************************
* Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade, conforme requisitos abaixo:
* Data: 27/09/2023
* Autor: Isabelly Santana
* Versão: 1.0
*************************************************************************/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para validar se um valor está entre 0 e 100
function validarNota(nota) {
  return nota >= 0 && nota <= 100;
}

rl.question('Digite o nome do aluno: ', (nomeAluno) => {
  rl.question('Digite o nome do professor: ', (nomeProfessor) => {
    rl.question('Digite o sexo do aluno (M/F): ', (sexoAluno) => {
      rl.question('Digite o sexo do professor (M/F): ', (sexoProfessor) => {
        rl.question('Digite o nome do curso: ', (nomeCurso) => {
          rl.question('Digite o nome da disciplina: ', (nomeDisciplina) => {
            rl.question('Digite a primeira nota: ', (nota1) => {
              rl.question('Digite a segunda nota: ', (nota2) => {
                rl.question('Digite a terceira nota: ', (nota3) => {
                  rl.question('Digite a quarta nota: ', (nota4) => {
                    const notas = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3), parseFloat(nota4)];

                    // Verifica se todas as notas são válidas
                    const notasValidas = notas.every(validarNota);

                    if (!notasValidas) {
                      console.log('Erro: As notas devem estar entre 0 e 100.');
                      rl.close();
                      return;
                    }

                    // Calcula a média das notas
                    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
                    const media = somaNotas / notas.length;

                    let status;
                    if (media >= 70) {
                      status = 'aprovado';
                    } else if (media < 50) {
                      status = 'reprovado';
                    } else {
                      rl.question('Digite a nota do exame: ', (notaExame) => {
                        const notaExameFloat = parseFloat(notaExame);
                        if (validarNota(notaExameFloat) && (media + notaExameFloat) / 2 >= 60) {
                          status = 'aprovado no exame';
                        } else {
                          status = 'reprovado no exame';
                        }

                        const sexoAlunoExibicao = sexoAluno === 'F' ? 'aluna' : 'aluno';
                        const sexoProfessorExibicao = sexoProfessor === 'F' ? 'professora' : 'professor';

                        console.log(`\nRelatório do ${sexoAlunoExibicao}:`);
                        console.log(`Nome do ${sexoAlunoExibicao}: ${nomeAluno}`);
                        console.log(`Nome do ${sexoProfessorExibicao}: ${nomeProfessor}`);
                        console.log(`Curso: ${nomeCurso}`);
                        console.log(`Disciplina: ${nomeDisciplina}`);
                        console.log(`Notas do ${sexoAlunoExibicao}: ${notas.join(', ')}`);
                        console.log(`Média Final: ${media.toFixed(2)}`);
                        console.log(`Status: ${status}`);
                        rl.close();
                      });
                    }
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});