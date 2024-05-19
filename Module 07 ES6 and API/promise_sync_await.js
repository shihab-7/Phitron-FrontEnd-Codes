
// api fetch korle server end theke promise ashle hoy resolve hobe nahoy reject hobe

// eita holo visual format 
// const getData = new Promise(function(resolve, reject) {
//     return reject("no data available");
// });

// getData
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// er upor vitti korei fetch kaj kore

fetch("https://fakestoreapi.com/products/1").then(data => console.log(data.json()));
// eita diye console a check kora jay j promise ta exicute hoise ki na 

// eita silo syncronus way , chaile amra asyncronus way teo fetch use korte pari

// const loadData = async() => {
//     const response = await fetch("https://fakestoreapi.com/products/1");
//     const data = await response.json();
//     console.log(data);
// };
// loadData();

// eikhane await ta wait koray sompurno funcn ta k 

// akhon promise ta reject hoile jevabe handle korte hoy oita jevabe korbo

// eita silo asyncronus way 
const loadData = async() => {
        try{
            const response = await fetch("https://fakestoreapi.com/products/1");
            const data = await response.json();
            console.log(data);
        }
        catch {
            (error) =>
            console.log(error);
        }
    };
    loadData();

// eikhane promise ta exicute korar kaj ta try a hobe r na hoile catch block a dhuke error ta show korbe