let arr = [ 0 , 0 , 1 ,1 , 1 ,2, 2 ,3, 3 , 4,5]

function removeDuplication(num){

    let x=0;
    for(let i=1; i<arr.length; i++){
      if(arr[i] !== arr[x]){
        
        x = x+1;
        arr[x] = arr[i]
      }
    }
    return x+1; // last unique digit is 5+1 //6 ans
}

console.log(removeDuplication(arr))