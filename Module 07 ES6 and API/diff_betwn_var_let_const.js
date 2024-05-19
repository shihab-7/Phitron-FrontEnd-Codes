// let r const holo block scope

function scope(){
    if(true)
    {
        let x=5;
        console.log(x); // let diye declare koray x k if block er bahire r pabo na
    }
    console.log(x); // error dibe
}

// kintu 
function scope(){
    if(true)
    {
        var x=5;
        console.log(x); // var diye declare koray x k if block er bahireo pabo
    }
    console.log(x); // error dibe na
}
console.log(x); // error dibe
// but function er bahire console log korle pabo na karon ota functional scope a


// difference between let and const
// let r const same block scope holeo let k pore change kora jay but const diye de declare kora variable r reinitialoize kora jay na

const name = "Shihab";
name = "Shariar";
console.log(name); // error ditese

let age = 23;
age = 20;
console.log(age); // poriborton kora jabe karon let diye declare kora