// let arr = [4, 9, 0, 2, 8, 7, 1 , 82];
// let arr = [4];
let arr = [2,2 , 0]

function secondLargest(arr) {
    if(arr.length<2){
        return null
    }
    let firstlarge = -Infinity
    let secondlarge = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]>firstlarge){
            secondlarge = firstlarge
            firstlarge = arr[i]
        }
        else if(arr[i]>secondlarge && arr[i]<firstlarge){
            secondlarge = arr[i]
        }
    }
     return secondlarge
}

let result = secondLargest(arr)
console.log(result);

// All corner cases handled