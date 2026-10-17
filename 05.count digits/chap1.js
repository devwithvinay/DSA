
let n= -5897386

function countDigit(n){
    if(n==0){
      return 1
    }
    n=Math.abs(n);

    let count = 0;
    while(n>0){
        n=Math.floor(n/10); // remove the point value

        count++;
    }
    return count
}

let result = countDigit(n)
console.log(result);

// corner case 

let num = 0 // => 0
let Num = -2347987984 // => 0
// it also a digit so how can i handled it
// by giving condition n==0 return 1 because it also a single digit
// for negative number n = Math.abs(n) now make negative no. to positive