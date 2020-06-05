function bubbleSort(arr){
  let len = arr.length
  for(let i=0; i<len-1; i++){ // 第一层的循环，代表了循环的次数 因为下面的是 j 和 j+1 所以，i 只需要 len-1 次即可
    for(let j=0; j<len-1-i; j++){ // 这才是循环比较的主体
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

let arr = [11, 3, 6, 5, 9, 1]
/**
 * len = 6, i需要循环 5 次
 * i = 0  =>  [3, 6, 5, 9, 1, 11]
 * i = 1  =>  [3, 5, 6, 1, 9, 11]
 * i = 2  =>  [3, 5, 1, 6, 9, 11]
 * i = 3  =>  [3, 1, 5, 6, 9, 11]
 * i = 4  =>  [1, 3, 5, 6, 9, 11]
 * i = 5  =>  [1, 3, 5, 6, 9, 11]
 */
console.log(bubbleSort(arr))