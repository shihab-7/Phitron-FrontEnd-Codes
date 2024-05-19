// loop related kaj gula sohoj a korte map,filter,find use kora jay

// map prottek element er upor operation chalay new akta array return korbe
// filter condition er upor base kore operation chalay r map er moto a o akta array retur n kore
// find er condition jodi multiple item puron kore tahole 1st er ta k return korbe r kauke na paile undefined return korbe

const nums = [2 , 2];
//jodi chai j ei array er prottekta element square kore akta new array toiri korte

// akhon jodi simple loop use kore korte hoito tahoile 
let tmp = [];

for(let i=0 ; i<nums.length ; i++) {
    const element = nums[i];
    const square = element * element;
    tmp.push(square);
}
console.log(tmp);
// eivabe korte hoito



// akhon same jinish e map diye korte

const square = nums.map(x => x * x); // eikhane x variable array er prottek index k access korse map er loop er moto boisistor jonno r akta arrow function use kore direct return kore dise result
console.log(square); // square a save thaka result console log diye print kora hoise



// filter operation

const products = [
{ name: "one plus" , price: 40000 , color: "green" }, , 
{ name: "xiaomi" , price: 10000 , color : "green" } , 
{ name: "realme" , price: 20000, color: "black"} , 
{ name: "vivo" , price: 12000, color: "red"} , 
{ name: "samsung" , price: 30000 , color: "green"} ];

// akta bishal object array er vitor theke akta condition er upor base kore multiple item ber kore nia ashte filter use korbo

const filtered_product = products.filter(pd => pd.color == "green"); // arrow func use kore just green color er object gulo ber kore niye ashsi products array er theke
console.log( filtered_product);
// filter sob object gulo niye akta array er vitor rekhe array hishebe console a print korbe

// find operation

const products2 = [
{ name: "one plus", price: 40000, color: "green" },, 
{ name: "xiaomi", price: 10000, color : "green" }, 
{ name: "realme", price: 20000, color: "black"}, 
{ name: "vivo", price: 12000, color: "red"}];

// akhon jkono akta specific object k ber kore ante chaile

const find_product = products2.find(pd => pd.name == "one plus"); // arrow func use kore just one plus name er object ta k ber kore niye ashbe
console.log(find_product); // find kono array return kore na just object return kore or element
console.log(find_product.price); // akhon just product tar price chaile 

// find jodi same jinish bar bar paay tahoile just 1st ta k show kore na aktao na paile undefined return korbe


