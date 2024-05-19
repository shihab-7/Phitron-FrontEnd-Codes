const name = "This is bangladesh , I love my country"; // eita simple string

const tmpltString = `This is bangladesh,
                     I love my country`; // eita template string jemon kore editor a likhbo temon e console a dekhabe


const templateStr = `this is a template string

joins

${name} and ${tmpltString}`; // ei string a python er f string er moto onno j kono variable include kore dite parbo sei jonno ${variable name} dite hobe

// eivabe template string use korai holo dynamic string

console.log(templateStr);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(num); // eivabe korle full array tai dekhay console a

console.log(...num); // eivabe ... spread operator use korle prottekta element alada alada ber hobe

// akta array te r onno akta array copy kore boshay dite 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = ["rahim", "karim", ...array];

console.log(newArray); // data type matter korbe na array add hoye jabe

// akhon build in function diye array er max element find korte chaile

console.log(Math.max(array)); // eita nan dibe karon array ta [] ei bracket akare func a gese like a object

console.log(Math.max(...num)); // eita error dibe na karon separator use koray array r object okare func a pass hosse na
