// forEach fnc object arrayb er prottekta element alada alada kore console a show kore

const products2 = [
    { name: "one plus", price: 40000, color: "green" },, 
    { name: "xiaomi", price: 10000, color : "green" }, 
    { name: "realme", price: 20000, color: "black"}, 
    { name: "vivo", price: 12000, color: "red"}];


// html file a j tag er vitor push korbo h1 tag oi tag ta id diye dhorte hobe 1st a
const show_products = document.getElementById("products");
// eita bahire decleare na korle forEach er vitor bar bar run hoito kenona forEach loop er moto kaj kore 

const prdct = products2.forEach((product) => {
    console.log(product);
    // akhon jodi akta browser tab a html file create kore ei product element er nam gula show korte chai tahoile
    // h1 akta tag banabo
    const h1 = document.createElement("h1");
    h1.innerText = product.name ; // page a product er name gula show korbo
    // tag h1 banano sesh akhon html a push korte hobe

    // bahire bano show_product er moddhe h1 k append kore dilei kaj sesh
    show_products.appendChild(h1);
})

// html file a obossoi script file hishebe ei js file ta agei add kore nite hobe