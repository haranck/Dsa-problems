function quickSort(arr){
   if(arr.length <= 1) return arr
   const pivot=arr[0]
   let left = []
   let right = []

   for(let i = 1 ;i < arr.length;i++){
      if(arr[i]>pivot){
         right.push(arr[i])
      }else{
         left.push(arr[i])
      }
   }

   return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([5,8,7,9,6,2]))

 
//  Merging 2 sorted arrays into a single sorted array


 function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

let arr1 = [1, 3];
let arr2 = [2, 4, 6 ];
console.log(mergeSortedArrays(arr1, arr2));  

// merge two sorted linked list
  
