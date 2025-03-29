const selectionsort = (arr) => {
   const n = arr.length
   for(let i = 0 ;i<n-1;i++){
      let minIndex= i
      for(let j = i+1 ; j<n;j++){
         if(arr[j]<arr[minIndex]){
            minIndex = j
         }
      }
      [arr[i],arr[minIndex]] =[arr[minIndex],arr[i]]
   }
   return arr
}

console.log(selectionsort([2,1,4,3,6,5]))  

////////////////////////////////////////////////////////////////////

function insertionSort(arr) {
   let n = arr.length;
   for (let i = 1; i < n; i++) {
       let key = arr[i];
       let j = i - 1;
       while (j >= 0 && arr[j] > key) {
           arr[j + 1] = arr[j];
           j--;
       }
       arr[j + 1] = key;
   }
   return arr;
}

// Example
console.log(insertionSort([12, 11, 13, 5, 6]));
