const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter even numbers
function isEven(x) {
  return x % 2 === 0;
}
output = arr.filter(isEven);
console. log(output);

//Result = [2, 4, 6, 8,]