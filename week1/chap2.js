// Functions if-else

    // function
    function Greet(name){
        console.log("hello",name)
    }

    let x = "Vinay"

    Greet(x);
   Greet("Ravi")

function Add(num1 , num2){
    let sum = num1 +num2

    console.log(sum)
}

Add(3,4)

function square(x){
    let res = x *x
    return res
}

let ans = square(5)
console.log(ans);


//if else

function Age(x){

    if(x<0){
        console.log('Invalid age');
    }
    
    else if(x>=18){
        console.log('you can vote');
    }
    else{
        console.log("You can't vote");
    }
}
Age(15)

function EvenOrOdd(num){
    if(num%2==0){
        console.log('Even Number');
    }else{
        console.log('Odd Number');
    }
}

EvenOrOdd(3)

