
//objects er vitor variable er value set korte chaile = na diye : dite hoy r variable gula separate korte , dite hoy

var person = {
    hands: 2,
    age: 21,
    friends: 15,
};

console.log(Object.keys(person)); //variables gular nam dekhabe
console.log(Object.values(person));//variables gular value dekhabe
console.log(Object.entries(person));//variables er sathe tader value o dekhabe

// object er j kono akta element dekhte
console.log(person.age);

// object er vitor kono object thakle tar element dekhte

var person = {
    hands: 2,
    age: 21,
    friends: 15,
    address:
    {
        city: "Noida",
        state: "Uttar Pradesh"
    },
};

console.log(person.address);
console.log(person.address.state);

// almost like c++
