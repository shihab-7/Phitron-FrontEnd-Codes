// js er array te aksathe vinno vinno j kono kisu rakha jay

// array destructuring

const number = [1, 2, 3, 4, 5, 6, 7, 8];

const [first, second, third, fourth] = number;
// ei line a first , second , third , fourth eigula variable hishebe kaj kore number array er serial index wise element gula k save kore nibe

console.log(second); // eitai holo destructuring


// object destructuring

const person = {
    name: "rahim",
    age: 20,
    city: "karim",
    country: "bangladesh",
    job: "programmer"
};

const p_name = person.name; // eivabe akta akta kore bar bar na likhe direct object destructuring korle subidha hoy

const { name, age, city, country, job } = person;

// object destructuring a array er moto alada nam dileo sequentially index er element assign hoy na , object er element er nam dile oi element er value e assign hoy

console.log(name);



// nested object

const test = [{
    name: "rahim",
    age: 20,
    city: "miami",
    friends : ["rahim" , "ali"], 
}, {}, {}];

console.log(test.length); // test array er size dekhabe

// akhon ei array er vitor 0 index er object tar modhhe friend element tar array er vitor j nam asa oigula dekhte chaile
console.log(test[0].friends[1]);

