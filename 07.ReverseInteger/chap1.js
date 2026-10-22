function reverseNumber(n) {
  let nCopy = n;
  let rev = 0;

  n = Math.abs(n);

  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }

  rev = nCopy < 0 ? -rev : rev;

  if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) {
    return 0;
  }

  return rev;
}

console.log(reverseNumber(14316)); // 61341
console.log(reverseNumber(-123)); // -321
