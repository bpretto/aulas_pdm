/*
Solicite ao usuário quatro valores inteiros e armazene-os num array simples. Após isso,
utilize a função filter() para gerar um novo array contendo apenas os valores pares.
*/

let numero1 = parseInt(prompt ("informe o número 1"));
let numero2 = parseInt(prompt ("informe o número 2"));
let numero3 = parseInt(prompt ("informe o número 3"));
let numero4 = parseInt(prompt ("informe o número 4"));

let numeros = [numero1, numero2, numero3, numero4];

numeros.filter((arr) => {
  if (arr % 2 == 0) {
    console.log(arr);
  };
});