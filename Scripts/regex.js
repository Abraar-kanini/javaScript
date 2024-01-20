let sentence = "Hi this is Abraar I am a FullStack Developer abraar";
let remove= "Abraar";

function removeWord(str,word){
    let regex= new RegExp(word,'gi')
    return str.replace(regex,'');
}

console.log(removeWord(sentence,remove));