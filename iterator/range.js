function Range(from, to) {
    this.from = from;
    this.to = to;
    this[Symbol.iterator] = function () {
        let prev=0;
        let current=1;
        return {
            next: function () {
                while (prev<from) {
                    [prev, current] = [current, current+prev];
                }
                if (prev<=to) {
                    let result = prev;
                    [prev, current] = [current, current+prev];
                    return {
                        done: false,
                        value: result
                    }
                }
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

 function Check(start, end) {
     const res=new Range(start,end)
     const arr=[...res];
     let fib=start;
     for (let i=0;i<arr.length;i++){
         fib+=arr[i];
     }
     return fib === 54;
}
const res=new Range(1,21)
console.log(Check(0,21))

export {Range,Check}