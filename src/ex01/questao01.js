/*
Complete o código-fonte JavaScript abaixo, cada função deve retornar uma promise que seja executada com o
intervalo de 1 segundo entre cada função. Cada função deve receber um parâmetro de um valor numérico, esse
valor deve ser multiplicado com um valor fixo pré-definido entre 0 a 20 no parâmetro do resolve da promise.
Cada função deve retornar o valor dessa multiplicação. Em seguida, faça a chamada das funções com o .then
imprimindo uma mensagem antes da sua chamada, em seguida mostre o resultado da multiplicação com o
respectivo intervalo entre cada uma delas.

function func1() {}
function func2() {}
function func3() {}
func1()
.then(() => {
return;
})
.then(() => {
return;
})
.then((result) => console.log(result));
*/

number = 4;

function func1(number) {
    return new Promise (function(resolve, reject) {
      setTimeout(function() {
        resolve(number * 5); 
    }, 1000);
  });}

function func2(number) {
return new Promise (function(resolve, reject) {
    setTimeout(function() {
      resolve(number * 9); 
  }, 1000);
});}

function func3(number) {
  return new Promise (function(resolve, reject) {
    setTimeout(function() {
      resolve(number * 17); 
  }, 1000);
});}

func1(number)
.then((result) => {
  console.log("func1: ", result);
});

func2(number)
.then((result) => {
  console.log("func2: ", result);
});

func3(number)
.then((result) => {
  console.log("func3: ", result);
});
