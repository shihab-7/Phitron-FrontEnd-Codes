// api ===> application programming interfaces

// a way to communicate between client and server

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json()) // res bolte response bujhay amra chaile onno variable o use korte pari essa moto
            .then(json=>console.log(json))

/* eikhane fetch diye api ta k request korte hoy pore server oitar 
response pathay dile oita then er vitor ashe ei then akta arrow func er maddhome 
data guloke akta .jeson file a convert kore fele er por r akta then diye json k console log korle data gulo 
dekha jay */

// ei .then bar bar use koratai hoilon chaining method

// akhon net issue er jonno jodi serverse response na kore tahoile amra chaile akta error show koray dite pari .catch chaining method diye

fetch('https://fakestoreapi.com/products/1')
           .then(res=>res.json())
           .then(json=>{
                console.log(json)})

           //.catch(err=>console.log(err)) eita error dekhay
           .catch(err=>
            {
                console.log(err)
            })

// api a request dile akta promise create hoy . oita hoy reolve hobe na hoy success hobe
// jodi success hoy tahoile .then er vitor jaya console a dhuke element show korbe
// nahole .catch exicute hoye error dekhabe

fetch('https://fakestoreapi.com/products/1')
           .then(res=> console.log(res))  // ei res k console log korle amra direct server theke asha response ta kei console a dekhte parbo



/* js a api fetch korte ei structure follow korte hobe

            fetch(API link)
            .then(parameter to receive server data => by using arrow fnc for same variable to convert in .json())
            .then(converted .json => by using another arrow fnc to console log the server data)

            if .then does not respond 
            .catch(error => console.log error)

*/