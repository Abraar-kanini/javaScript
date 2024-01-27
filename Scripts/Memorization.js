const storeNum=[];
let memo=(a)=>{
if(storeNum[a]!=null){
    return storeNum[a];
}
let result= a*2;
storeNum[a]=result
return result;
}

console.log(memo(6));
console.log(storeNum)