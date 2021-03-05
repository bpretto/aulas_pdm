number = 4;

async function func1(number) {
  return number * 5
}
async function func2(number) {
  return number * 9
} 
async function func3(number) {
  return number * 17
}

async function doAll(){
  var func1Result = await func1(number);
  var func2Result = await func2(number, func1Result);
  var func3Result = await func3(number, func2Result);
  return [func1Result, func2Result, func3Result]
}

doAll()
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      console.log("func", i+1, ": ", result[i]);
    }
  })
  .catch((error) =>{
    console.log(error);
  });