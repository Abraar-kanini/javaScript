    
function closure(){
    let a= 5;
    return function add(){
        return a+5;
    }
}

let result=closure();
console.log(result());

(function sum(){
    console.log("hii thid id abraar")
})()


function abbu(){
    let name="abraar"

    function abraar(){
        return name

    }
    return abraar
}

let call=abbu()
console.log(call())


let a =()=>{
    console.log("hii i am arrow functiom")
}
a();


let obj={
    a:1,
    b:2,
    c:3
}

console.log(Object.keys(obj))

let arr=[1,2,3,4,5,6]

let mapping=arr.map((e)=>{
    return e*2;
})

let filtering=arr.filter((e,i)=>{
    if(e>=5){
        return i
    }
})

// console.log(mapping)
console.log(filtering)


let number=[{
    num:1,
    name:"abbu"
},
{
    num:2,
    name:"abbu"
}]

let reducing= number.reduce((prev,curr)=>{
    return [...prev,curr.num*2]
},[])
console.log(reducing)


function callback1(a,func){

    console.log(a)
    func(5)

}

function callback2(b){
console.log(b)
}

callback1(12,callback2)

let array=[1,2,3,5,6,1,2,3]
let array1= array.reduce((prev,curr)=>{
prev[curr]=curr*2
return prev
},{})

console.log(array1)