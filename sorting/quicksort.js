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

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));  

// sort a string using merge sort

function mergeSortString(str) {
   // Convert string to array of characters
   let charArray = str.split('');

   // Apply merge sort
   charArray = mergeSort(charArray);

   // Convert sorted array back to string
   return charArray.join('');
}

// Merge Sort function
function mergeSort(arr) {
   if (arr.length <= 1) return arr; // Base case

   let mid = Math.floor(arr.length / 2);
   let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));

   return merge(left, right);
}

// Merge function
function merge(left, right) {
   let sortedArray = [];
   let i = 0, j = 0;

   while (i < left.length && j < right.length) {
       if (left[i] < right[j]) {
           sortedArray.push(left[i++]);
       } else {
           sortedArray.push(right[j++]);
       }
   }

   return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

let str = "hello";
let sortedStr = mergeSortString(str);
console.log(sortedStr);  



// merge two sorted linked list

