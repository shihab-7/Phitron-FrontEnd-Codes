// a number is even or odd

var number=50;

if(number % 2 == 0)
{
    console.log("even");
}
else if(number == 0)
{
    console.log("zero");
}
else 
{
    console.log("odd");
}

// sort an array

var num = [1,4,7,1,2,11,90,3,100];

console.log(num.sort(function(a,b){  // sort build in function default 1 to 10 porjonto valo vabe sort korte pare but er beshi sort korte function diye use korte hoy
    return a - b;
    })
);

// second method
 
for(var i=0; i<num.length; i++)
{
    if(num[i] > number[i+1])
    {
        var tmp = num[i];
        num[i] = num[i+1];
        num[i+1] = tmp;
    }
    console.log(num[i]);
}

// find longest string from a string array

var names = ["rakib" , "jubayer" , "ali" , "alom"];

var max = names[0];

for(var i=0;i<names.length;i++)
{
    if(names[i].length > max.length)
    {
        max = names[i];
    }
}
console.log(max);

// almost like c++


// remove dublicates from an array

var array = [1,1,2,2,3,3,3,4,7,8,8,10];
var newArray = [];

for(var i=0;i<array.length;i++)
{
    if(newArray.indexOf(array[i]) == -1)
    {
        newArray.push(array[i]);
    }
}
console.log(newArray);

// another method

for(var i=0 ; i < array.length ; i++)
{
    for(var j=i+1 ; j < array.length ; j++)
    {
        if(array[i] === array[j])
        {
            array.splice(j,1);
            j--;
        }
    }
}
console.log(array);