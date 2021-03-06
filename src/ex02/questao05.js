/*
Solicite ao usuário quatro valores inteiros e armazene-os num array simples. Após isso,
utilize a função map() para gerar um novo array contendo o fatorial desses quatro
valores.
*/

let numero1 = parseInt(prompt("informe o número 1"));
let numero2 = parseInt(prompt("informe o número 2"));
let numero3 = parseInt(prompt("informe o número 3"));
let numero4 = parseInt(prompt("informe o número 4"));

let numeros = [numero1, numero2, numero3, numero4];

let fatoriais = numeros.map((elem) => {
  if(elem<0) {
    return 'Valor deve ser maior ou igual a zero';
  } else if ( (elem == 0) || (elem == 1) ) {
    return 1;
  } else {
      var acumula = 1;
      for(x=elem;x>1;x--) {
        acumula = acumula * x;
      };
      return acumula;
    };
});
for (let i = 0; i < fatoriais.length; i++) {
      console.log("numero "+ (i+1)+ ": "+ fatoriais[i]);
    };