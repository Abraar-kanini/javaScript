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