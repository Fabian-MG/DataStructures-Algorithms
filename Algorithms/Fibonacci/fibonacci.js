
const fibonacciRecursively = (n) => {
    
    if( count === n-1 )

    let count = 0
    let start = count
    let next = sum
    let sum = start + next

    return sum + fibonacciIterative()
}

const fibonacciIterative = (n) => {
    let sum = 0
    let start = 0
    let next = 1

    for (let i = 0; i < n; i++) {
        sum = start + next
        start = next
        next = sum    
    }
    return sum
}

// O(n)
const fibonacciIterative2 = (n) => {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
   return arr[n];
  }
  fibonacciIterative(3);
  

  //really bad O(2^n)
  const fibonacciRecursive2 = (n) => {
    if (n < 2){
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
  }

fibonacciIterative(8)