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


let object12={
    a:1,
    b:2,
    c:{
        a:4
    }
}

let ShallowObj={...object12};
ShallowObj.a=18   //this will only change the shallow object not the original object
ShallowObj.c.a="hii this is abraar"  //this is called shallow cloneing if we chnage innner object in shallow obj it will also chnage the original object
console.log(object12)
console.log(ShallowObj);   


let DeepObj=JSON.parse( JSON.stringify(object12))  // In this if we do deep cloning and do the changes in the deepobj inner object it will only chnage the deepobj not the original object
DeepObj.c.a="hii this is abbu";
console.log(DeepObj);  



let spread=[{
    id:1,
    name:"abraar"
},
{
id:2,
name:"john"
},
{
    id:3,
    name:"Abe"
}

]


let spreadFunc = (obj) => {
    let result = obj.reduce((prev, curr) => {
      return [...prev, curr.name]; // Spread an array containing curr.name
    }, []);
    return result; // Return the result of the reduce operation
  }

console.log(spreadFunc(spread));




