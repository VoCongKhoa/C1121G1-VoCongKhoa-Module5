function fibonanci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonanci(n - 1) + fibonanci(n - 2);
  }
}

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += fibonanci(i);
  console.log(fibonanci(i));
}
console.log('Tong 10 so dau tien:');
console.log(sum);
