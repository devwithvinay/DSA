let s = ["v" , "i" , "n", "a" , "y"]


function reverseString(s){
   let len = s.length;
   let halfLen = Math.floor(len/2)

    for(let i=0; i<halfLen; i++){
      let temp = s[i]
      s[i] = s[len-1-i]
      s[len-1-i]= temp
    }
    // return s // for my sake of output
}

console.log(reverseString(s));

// remember for reverse or swap value
// a=10 , b=20
// need a = 20 , b=10
/*
aki value temp m store kro , then b ki value a me assign kro, fir jo temp me a ki value padi thi use b me assign kar do 
temp = a;
a = b
b = temp

*/