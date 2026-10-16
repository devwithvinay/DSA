let n = 5;

for (let i = 1; i<=n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j; //here value become string so its now adding  
//or row = row + (j+1)
  }
  console.log(row);
}
/*

1
12
123
1234
12345

*/