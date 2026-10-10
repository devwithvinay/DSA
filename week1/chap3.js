// loops
//    steps
// 1.  Initialization
// 2.  Condition Check true/false
//3.   Body
//4.  Updation

for (let i = 1; i <= 10; i++) {
  console.log(i, "hello vinay");
}

for (let i = 0; i < 10; i = i + 1) {
  console.log("i" ,i ,i + 2); //i is same it print a value with add
        // i=0 , 0+2=2
        // i=1 , 1+2=3 
        // i=2 , 2+2=4
        // i=3 , 3+2=5
        // look those number
}

for(let i=1 ; i<9; i=i+2){ 
    console.log('i' , i); // 1, 3, 5 ,7

    //step:1.  here 1st i=1 ,i<9 condition check true , then print 
    //step:2. here  now update it i=1+2 = 3

    // step:3 here i=3 3<9 print it (3)
    // step:4 here update it i=3+2 = 5;

    // step:5 here i=5  5<9 then print (5)
    // step:6 here update i=5+2 =7

    //step:7 here i=7 7<9 then print(7)
    //step:8 here update i=7+2 = 9

    // step here i=9 9<9 condition false no print
   
}

// 1st condition check if true then print ; then update that value 

// Reverse loop 

for(let i=6; i>0; i=i-1){
    console.log('i',i);
}
// here i=6 6>0 true print 6
//here update i=6-1 = 5

// here i=5 5>0  true print 5
// so on ...
