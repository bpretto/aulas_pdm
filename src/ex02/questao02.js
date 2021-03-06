/*
Refaça o exercício anterior, mas agora utilizando o conceito de Arrow Function
juntamente com a função reduce(), ou seja, faça o calculo da média em uma única linha
utilizando os dois conceitossimultaneamente.
*/

let nota1 = parseInt(prompt ("informe a nota 1"));
let nota2 = parseInt(prompt ("informe a nota 2"));
let nota3 = parseInt(prompt ("informe a nota 3"));
let nota4 = parseInt(prompt ("informe a nota 4"));

let notas = [nota1, nota2, nota3, nota4];

let soma = notas.reduce((prevVal, elem) => {
  console.log(prevVal);
  return prevVal + elem;
}, 0);

console.log("a média do aluno é: " + soma/4);