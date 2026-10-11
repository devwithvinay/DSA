let arr = [2, 4, 8, 5, 7, 1, 6];

function findElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }

  return -1;
}

let res = findElement(arr, 4);
console.log(res);
