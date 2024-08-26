arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sum or max
const output = arr.reduce(function(acc, curr){
  acc = acc + curr;
  return  acc;
}, 0);
console.log(output);
