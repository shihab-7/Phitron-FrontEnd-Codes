// js a syncronus operation cholar somoy code line by line exicute hoy 
// kintu line by line exicute howar somoy jodi boro kono processing function use hoy tahole js seta skip kore porer line theke exicute korte thake
// r sob kisu exicute howar por last a oi baki thaka process ba fnc ta exicute hoy eita k js er asyncronus behaviour bole


console.log(1);
console.log(2);
console.log(3);
console.log(4);
name(5);        // eita line a thakleo sobar sesh a exicute hobe r etai asyncronus behaviour js er
console.log(6);
console.log(7);
console.log(8);
console.log(9);

function name(x) {
    setTimeout(()=>console.log(x));
}