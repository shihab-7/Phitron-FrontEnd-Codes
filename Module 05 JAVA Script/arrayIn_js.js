// js a array declaration 

var friends = ["rahim", "karim","michael"];

console.log(friends); // full array tai print kore dibe

// jekono index access korte
 console.log(friends[0]);

 // array te new element add korte arrayname.push korte hoy , eita pison theke push hoy

 friends.push("David");
 console.log(friends);
 
 // last er element dalete korte arrayname.pop korte hoy
 friends.pop();
 console.log(friends);

 // element samner dike move korte arrayname.unshift(element) korte hoy
 friends.unshift("karim");
 console.log(friends);

 // 1st element ta remove korte shift korte hoy
 friends.shift();
 console.log(friends);

 // 2 ta array or string jog korte arrayname.concat(2nd arrayName) korte hoy
 var f=[1,2,3];
 var g=[4,5,6];
 
 console.log(f.concat(g));

 // array reverse korte arrayName.reverse() korlei hoy
 console.log(friends.reverse());


 var people = ["a" , "b" , "c" , "d" , "e"];

 console.log(people.slice(2,5)); // koto index theke koto index porjonto dekhte chai
 console.log(people.indexOf("a")); // element er index dekhte

 // to know more visit w3school javascript





