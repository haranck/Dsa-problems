//arr = [8,5,1]

// const selectionsort = (arr) => {
//    const n = arr.length
//    for(let i = 0 ;i<n-1;i++){
//       let minIndex= i
//       for(let j = i+1 ; j<n;j++){
//          if(arr[j]<arr[minIndex]){
//             minIndex = j
//          }
//       }
//       [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//    }
//    return arr
// }

// console.log(selectionsort([8,5,1]))


// arr = [4,2,9]



function selectionsort(arr){
   const n = arr.length
   for(let i = 0 ;i<n;i++){
      let minIndex= i
      for(let j=i+1;j<n;j++){
         if(arr[j]<arr[minIndex]){
            minIndex = j
         }
      }
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
   }
   return arr
}

console.log(selectionsort([4,2,9]))

  