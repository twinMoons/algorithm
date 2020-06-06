function insetSort(arr){
  let len = arr.length, tem
  for(let i=1; i<len; i++){
    tem = arr[i]
    while(i>0 && tem<arr[i-1]){
      // 需要更换位置
      arr[i] = arr[i-1]
      i--
    }
    arr[i] = tem
  }
  return arr
}
let arr = [11, 3, 6, 5, 9, 1]
console.log(insetSort(arr))