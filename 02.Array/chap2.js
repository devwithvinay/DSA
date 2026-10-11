let arr = [2, -9, 17, 0, 1, -10, -4 , -8]

function countNegative(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){ 
        if(arr[i]<0){  // condition true then run next line
            count++  // 1st time it just run (0+1=1) , 

        }
    }
    return count;
}

let res = countNegative(arr)
console.log(res);
