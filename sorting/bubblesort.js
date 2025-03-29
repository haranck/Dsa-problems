// bubble sort = [12,46,6,34,22]

const bubblesort = (arr) => {
   const n = arr.length
   for(let i = 0;i<n;i++){
      for(let j=0;j<n-i-1;j++){
         if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
         }
      }
   }
   return arr
}

console.log(bubblesort([12,46,6,34,22]))