// in js parseFloat mane doshomic r parseInt mane purno sonkha

var num1 = 10.80;
var num2 = 20;

console.log(num1 + num2); // num1 er por space ebong num2 er age space na dile run hobe na

// akhon jogfol ta purno sonkhay dekhte chaile parseInt diye convert kora jay

console.log(parseInt(num1 + num2));

// string r number jog

var num3 ="100";

console.log(num3 + num1); // akmattro jog baad diye baki operation sob thikthak e hoy string r number er jonno
console.log(num3 - num1);
console.log(num3 * num1);
console.log(num3 / num1);

//string k number a convert kore niye jog korle

console.log(parseInt(num3) + num1);

var num6 = "100.33333";

console.log(parseFloat(num6));  //doshomic a convert korar jonno parsefloat

// akhon doshomic er por koto ghor porjonto sonkha nibo oita toFixed() er vitor likhe dile hoy
console.log(parseFloat(num6).toFixed(2));



