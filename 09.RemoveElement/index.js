let arr = [3, 2, 1, 5, 3, 4, 8, 3,4];
let val = 3;

function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

console.log(removeElement(arr, val));  