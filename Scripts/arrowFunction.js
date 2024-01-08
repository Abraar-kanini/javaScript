

let func=()=>{
    console.log("hii this is abraar this is arrow function");
}


// map function start

let mapping=(e)=>{
  return e*2;
}

let arr=[1,2,3,4,5]
let arr1=arr.map((e)=>mapping(e))
console.log(arr1);

// .map is the function that will return the new array it will pass the value to the mapping function 


// filter method start
let filtering =(e)=>{
if(e>2){
    return e;
}
}

let arr2= arr.filter((e)=>filtering(e));
console.log(arr2);

// filter method will check the condition and return the value it will give the output in new Array

// reduce method Start

let reducing=(a,b)=>{
    return a*b;
}

let arr3= arr.reduce((a,b)=>reducing(a,b))
console.log(arr3);


// reduce method will take two paramenters and return single value 


// another method of doing fibo program
let fibo=(e)=>{
    let num= Array.from(Array(e+1).keys());
    let num1=num.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(num1);
}
fibo(3);

// fibo program ends


let obj={
    a:"abbu",
    b:2,
    ab: function abb(){
        let result=this.a
        return result

    }
}

let obj1={
    a:"abbu",
    b:2,
    ab: ()=>{
        let result=this.a
        return result

    }
}

console.log(obj.ab()) //in normal function it will access the object
console.log(obj1.ab()) // in arrow function u cant access the this is not able to access the object


func();