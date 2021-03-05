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