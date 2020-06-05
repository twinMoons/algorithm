
function selectionSort(arr){
  let len = arr.length
  let minIndex
  for(let i=0; i<len-1; i++){
    minIndex = i
    for(let j=i+1; j<len; j++){
      if(arr[minIndex] > arr[j]){
        minIndex = j
      }
    }
    if(i != minIndex){
      [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]
    }
  }
  return arr
}
let arr = [11, 3, 6, 5, 9, 1]
console.log(selectionSort(arr))
/**
 * 选出最大(最小)放到最后(最前)
 */