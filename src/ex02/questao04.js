/*
Solicite ao usuário o nome e idade de quatro pessoas, armazenando esses dados num
array de objetos. Após isso, utilize a função filter() para gerar um novo array contendo
apenas as pessoas idosas (idade maior ou igual a sessenta anos).
*/

let nome1 = prompt ("informe o nome 1");
let idade1 = prompt ("informe a idade 1");
let nome2 = prompt ("informe o nome 2");
let idade2 = prompt ("informe a idade 2");
let nome3 = prompt ("informe o nome 3");
let idade3 = prompt ("informe a idade 3");
let nome4 = prompt ("informe o nome 4");
let idade4 = prompt ("informe a idade 4");

let pessoas = [
  { nome: nome1, idade: idade1 },
  { nome: nome2, idade: idade2 },
  { nome: nome3, idade: idade3 },
  { nome: nome4, idade: idade4 },
]

function checagem(obj) {
    return obj.idade >= 60;
};

let idosos = pessoas.filter(checagem);

console.log(idosos);