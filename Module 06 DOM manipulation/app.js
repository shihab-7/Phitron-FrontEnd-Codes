// alert("hello world!");
// console.log("hello world!");

// java script a html file er tag dhorte document.get element by tag name("tagName") dite hoy

console.log(document.getElementsByTagName("h1")); // html file a kon tag kotobar asa oitar akta collection banay dey

// chaile variable er modhhe rekheo console.log kora jay

var h1=document.getElementsByTagName("h1");

console.log(h1);

// akhon kono specific tag k dhorte hoile html file er oi tag a akta id set kore diye js a eshe oi id diye dhorte hobe

var title=document.getElementById("title");

console.log(title);

// chaile amra class diyeo multiple tag k dhorte pari
// ei sob kisui akta array er modhhe rakhe r amra chaile array er moto index diye access korte pari

// js diye specific kono tag k color o kora jay 

title.style.color = "red";

// akhon color remove kore dite
document.getElementById("title").style.removeProperty("color");
// eivabe j kono property remove kora jay

// html er img tag er modhhe rakha attributes gula k dhorte akta id set kore dite hobe

var img=document.getElementById("img");

console.log(img.getAttribute("src")); // src attribute a ja thakbe colsole a tai dekhabe

// akhon attribute set korte hole

img.setAttribute("alt" , "picture"); // must 2 ta argument pass korte hobe
// akhon eta console a dekhte chaile

console.log(img.getAttribute('alt'));

// akhon kono tag er vitor new kono class add korte chaile 

img.classList.add("NewClass");
console.log(img);



// html er p tag er text ta k dhorte and console a lekha ta dekhte
var hero = document.getElementById("hero");
console.log(hero.innerText); // console a text ta dekhte

// html er input tag er kisu dekhte
var input = document.getElementById("input");
console.log(input.value);
//chaile type o check korte pari console a sathe type change o kora jay parseint or parsefloat diye
console.log(typeof input.value);

// input type er field er data gula .value r baki gula inner text diye access korte hoy

// html er kono parent div er vitorer sob child dekhte .inerhtml
var parent = document.getElementById("parent").innerHTML;
console.log(parent);

// ei testdiv akta array hishebe test class ta k akta list kore dise
var testDiv = document.getElementsByClassName("test");

// console.log(testDiv);
// akhon array er moto access korle pabo
console.log(testDiv[0].childNodes); // eita dara bujhay test div er vitor j j child gula asa oigula and child node gulao abr array er moto list akare asa jetao abr index diye access kora jay
 // akhon test lekha ta dekhte
console.log(testDiv[0].childNodes[1]); // eita console a test lekha ta dekhabe

// akhon abr parent node gula k access korte 

console.log(testDiv[0].childNodes[1].parentNode.parentNode); // eivabe joto beshi node thakbe tar last a .parent diye diye parent ber kora jay
// eivabe chaile akbare last parent node porjonto jaowa jaya abe .childnode[index] diye oi parent er jkono child k access kora jay eivabe full html code a traverse kora jay

// akhon html code a kono tag add korte chaile js diye kora jay

var AppendByJs = document.getElementById("AppendByJs"); // akhon eita html er body or any tag er vitor a dite chaile konthay dite chai oitar id diye dhore append kore dibo

var p = document.createElement("p"); // akhon jodi ei p tag er vitor kisu likhe dite chaile otao parbo
p.innerText = "p tag ta js diye banano"; 

AppendByJs.appendChild(p); // p k AppendByJs div er vitor dhukay dilam
 // eivabe chaile j kono jinish html sarao js diye banano jay

 // akhon chaile akta function banay rakhte pari jeta diye kono specefic tag jokhon essa banay nite pari

 function createEl(){
    var p = document.createElement("p");
    p.innerText = "p tag ta js diye banano";
    AppendByJs.appendChild(p);
 }; // akhon eita call kore dilei notun p tag toiri hoye jabe

 createEl();

 

// interactive button 
 // add event listener

//  document.getElementById("submit-btn").addEventListener("click", function(e){

//     // ei block a ja essa tai kaj korate parbo oi button ta te click kore
//     console.log(alert("Submit"));
//     createEl();
//     console.log("yess");
//  });

 // amra j input section ta niyesilam oitate kew kono input dile oita console a print korte chaile
 
 document.getElementById("submit-btn").addEventListener("click", function(e){

    var inputValue = document.getElementById("input").value;
    
    console.log(inputValue);
 });

 // ro onek event listener asa jemon kono input box a lekhar sathe sathe console a dekhabe , eitake on change bole
 
 document.getElementById("input").addEventListener("change", function(e){

    var inputValue = document.getElementById("input").value;
    
    console.log(inputValue);
 });

// blur event listener

document.getElementById("input").addEventListener("blur", function(e){
    var inputValue = document.getElementById("input").value;
    console.log(inputValue);
 });
 // display te j kono jaygay click korle console a print hobe input field er lekha
 // function er vitor default paramete hishebe e deowa thake e er vitor onek buildin function thake

 document.getElementById("submit-btn").addEventListener("blur", function(e){

    var inputValue = document.getElementById("input").value;
    
    console.log(e.target.value);
 }); // eivabeo target diye access kora jay karon oisob target er vitor thake

 // ato boro event listener er code na likhe chaile amra direct js er function ta k html er code a call korte pari event name diye

 document.getElementById("submit-btn").addEventListener("submit",activity);

 function activity(e){
    document.getElementById("input");
    console.log("click hoise");
 }; // eivabe js a short kore neowa jay but r o short a html file a add korle beshi valo tai html er input tag er vitor event er nam diye just function ta name diye call korlei hoye jabe