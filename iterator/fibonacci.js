function Fibonacci(count) {
    this.count = count;
    this[Symbol.iterator] = function () {
        let prev=0;
        let current=1;
        let step=0;
        return {
            next:  ()=> {
                if (step<this.count) {
                    let value = prev;
                    let nextValue = value + current;
                    prev = current;
                    current = nextValue;
                    step++;
                    return {
                        value: value,
                        done: false,
                    }
                }else
                 {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

//  function Check(start, end) {
//      const res=new Fibonacci(start,end)
//      const arr=[...res];
//      let fib=start;
//      for (let i=0;i<arr.length;i++){
//          fib+=arr[i];
//      }
//      return fib === 54;
// }
const res=new Fibonacci(5)
const arr=[...res];
console.log(arr)
console.log(res)

export {Fibonacci}