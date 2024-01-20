// we can access the object keys value and both using below code 


let obj={
    a:1,
    b:2,
    c:3
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


let month={
    1:"Jan",
    2:"Feb",
    3:"mar",
    4:"apr",
    5:"may",
    6:"june",
    7:"july",
    8:"aug",
    9:"sep",
    10:"oct",
    11:"nov",
    12:"Dec"
}

console.log(month[12] || "unknown number")


// we dont want to use switch case in this method we can access the by this method using object


const books=[{
    name:'anna',
    books:['bible','harry potter'],
    age:21

},
{
    name:'bob',
    books:['war and peace','romeo and juliet'],
    age:26
},
{
    name:'alice',
    books:['the lord of the rings','the shining'],
    age:18
}



]

const result=books.reduce((prev,curr)=>{
 return [...prev,...curr.books]
},[])

console.log(result);


let numbers=[1,2,3,4];
let numbers1=[5,6,7,8];
let numbers2=[...numbers,...numbers1];
console.log(numbers2);


let num=[1,2,[1,2],[3,4],[5,6,[1,2]]];
console.log(num.flat(Infinity));



