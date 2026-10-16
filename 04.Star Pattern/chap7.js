let n =5;

for(let i=0; i<=n; i++){
    let row = "";
    let Switch =1;

    for(let j=0; j<=i ; j++){
        row = row + Switch;

        if(Switch == 1){
            Switch =0
        }else{
            Switch = 1;
        }
    }
    console.log(row);
}

/*

1
10
101
1010
10101
101010

*/
// --------------------------------------------------------------------------------------------

  let Switch = 1;

for (let i = 0; i <= n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row = row + Switch;

    if (Switch == 1) {
      Switch = 0;
    } else {
      Switch = 1;
    }
  }
  console.log(row);
}


/*

1
01
010
1010
10101
010101


*/