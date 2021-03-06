/*
Solicite ao usuário as quatro notas (inteiro) bimestrais de um aluno, armazenando-as
num array simples. Após isso, utilize a função reduce() para calcular a média desse
aluno. 
*/

let nota1 = parseInt(prompt ("informe a nota 1"));
let nota2 = parseInt(prompt ("informe a nota 2"));
let nota3 = parseInt(prompt ("informe a nota 3"));
let nota4 = parseInt(prompt ("informe a nota 4"));

let notas = [nota1, nota2, nota3, nota4];

let soma = notas.reduce(function(prevVal, elem) {
  console.log(prevVal);
  return prevVal + elem;
}, 0);

console.log("a média do aluno é: " + soma/4);