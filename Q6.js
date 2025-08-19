// 6. Reemove Dublicate word from array

function removeDuplicates(arr) {
  let result = [];         
  for (let i = 0; i < arr.length; i++) {
    let match = false;  
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        match = true;       
        break;
      }
    }
    if (!match) {   
      result[result.length] = arr[i];
    }
  }
  return result;
}

let nums = [1, 2, 2, 3, 4, 3, 5];
console.log(removeDuplicates(nums));  