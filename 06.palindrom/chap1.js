// An integer when it read same forward or backward  e.g=> 121 , nitin etc

 let n = 1443441;
 if(n<0) return false

 let rev = 0;
 while(n>0){
    rem = n%10
    rev = (10*rev) + rem 
    n=Math.floor(n/10)
 }
 if(rev===n){
    return true
 }else{
    return false

    // return rev === n;
} 