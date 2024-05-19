function sum(a = 0, b = 0) {
  var result = a + b;
  return result;
  var c = a; // return er por function er vitor r kisu thakleo oisob exicute hoy na
  return c;
}

sum(10, 20); // akhon run korle kisui dekhabe na karon function return kora jinish kotaho store kore rakha hoy nai

var answer = sum(10, 20);

console.log(answer); // almost same as c++

function first() {
  return "Hello";
}

function second() {
  return first() + " World";
}

var result = second();
console.log(result);