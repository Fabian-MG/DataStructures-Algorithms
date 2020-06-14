const factorialRecursively = (num) => {
  if (num === 2) return 2;

  return num * factorialRecursively(num - 1);
};

const factorialIterative = (num) => {
  let factorial = 1;
  for (let i = num; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
};

console.log(factorialRecursively(2))
console.log(factorialIterative(1));
