// Merge in two array without build in function

function mergeArray(a, b){
    let res = new Array(a.length + b.length);
    for(let i = 0; i<a.length; i++){
        res[i] = a[i]
    }

    for(let j = 0; j<b.length; j++){
        res[a.length+j] = b[j]
    }

    return res
}

const arr1 = [1,2,3];
const arr2 = [4,5,6]

console.log(mergeArray(arr1,arr2))