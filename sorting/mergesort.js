
function mergeSort(arr){
   if(arr.length < 2)return arr

   let middle = Math.floor(arr.length / 2)
   let left = mergeSort(arr.slice(0,middle))
   let right = mergeSort(arr.slice(middle))

   return merge(left,right)
}

function merge(left,right){
   let sortedArray =[]
   while(left.length && right.length){
      if(left[0]>right[0]){
         sortedArray.push(right.shift())
      }else{
         sortedArray.push(left.shift())
      }
   }
   return [...sortedArray,...left,...right]
}

console.log(mergeSort([5,9,6,3,7,8]))