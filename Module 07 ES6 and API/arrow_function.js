// normal function

function test(){
    return "hello world";
}
const store = test();
console.log(store);


// but soto kono function direct arrow functionn use kore shortcut a likha jay

const test2 = () => 12 + 20; // arrow function er structure eikhane return automatically hoy likhe dite hoy na
console.log(test2); // eita dekhabe j test2 akta function

console.log(test2()); // eita dekhabe test2 er value


// arrow function use kore kono block er kaj korte

const test3 = () => {
    console.log("hello world");
    return ""; // eita deoway r undefined console a print hobe na 
};

console.log(test3()); // eita function er console.log print korar por akta undefined return korbe eita handle korte block er vitor kisu akta return korte hobe

//  arrow function a argument pass o kora jay abr parameter diye receive o kora jay normal function er moto