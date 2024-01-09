let pro=()=>{
    let prom=new Promise((resolve,reject)=>{
           if(2>1){
            resolve("Yes 2 is Greather Than 1")
           }
           else{
            reject("No 2 is not Greather that 1")
           }
    })
    prom.then((e)=>{
        console.log(e);
    }).catch((err)=>{
        console.log(err)
    })
}

pro();


// promise will have two arguments resolve and reject 
