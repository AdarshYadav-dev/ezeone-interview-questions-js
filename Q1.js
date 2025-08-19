// 1 . Reverse in a string without built-in function

function str(s){
    let rev = "";
    for(let i = s.length-1; i>=0; i--){
        rev += s[i];
    }
    return rev;
}

console.log(str("adarsh"))