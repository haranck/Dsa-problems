// Linear search

// const arr= [2,8,9,3,4,0]
// const target = 0

// function linearSearch(array,target){ 
//    for(let i = 0; i<array.length;i++){
//       if(target===array[i]){
//          return i
//       }
//    }
//    return -1
// }
// console.log(linearSearch(arr,target));


///////////////////////////////////////////////////////////////////////



// function linearSearch (arr,target){
//    let result =[]
//    for(let i=0;i<arr.length;i++){
//       if(target===arr[i]){
//          result.push(i)
//       }
//    }

//       return result

// }

// console.log(linearSearch([2,8,9,0,3,4,0],0))



///////////////////////////////////////////////////////////////////////

// Binary Search

function binarySearch(arr, target) {
   let start = 0
   let end = arr.length - 1       

   while (start <= end) {
      let middle = Math.floor((start + end) / 2)

      if (arr[middle] === target) {
         return middle
      } else if (arr[middle] < target) {
         start = middle + 1
      } else {
         end = middle - 1
      }
   }

   return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 5))  

//////////////////////////////////////////////////////////////////////

// recursion using sum

// function recursionsum (arr){
//    if(arr.length === 0 ){
//        return 
//    }
//    return arr[0] + recursionsum(arr.slice(1))
// }
// console.log(recursionsum([5,7,8,1,3,2]))

//////////////////////////////////////////////////////////////////////

// recursion using factorial

// function factorial(num){
//    if(num===0){
//       return 1
//    }
//    return num * factorial(num-1)
// }

// console.log(factorial(5))

//



function reverse(str,target,replace){
   if(str === "")return ""
   if(str[0]=== target)return replace+reverse(str.slice(1),target,replace)
   return str[0]+reverse(str.slice(1),target,replace)
}
console.log(reverse("hello","o","a")) 




const arr =[8,9,6,3,1,4,5,7,2]
let ind = 0
function sumarray(arr,index){
    if(arr.length === index) return 0
    return arr[index] + sumarray(arr, index+1)
}
console.log(sumarray(arr,ind))

// function palindrome(str,left =0,right= str.length-1){
//     if(left===right)return true
//     if(str[left] !==str[right]) return false
//     return palindrome(str,left+1,right-1)
// }
// console.log(palindrome("MALAYALAM"))
// console.log(palindrome("BROTOTYPE"))


//string to array conversion
function string(str,index=0,arr=[]){
   if(index===str.length)return arr
   arr.push(str[index])
   return string(str,index+1,arr)
}
console.log(string("Haran"))
   
//recursive binary search

function binaryrecursive(arr,target,left=0,right= arr.length-1){
   if(left>right)return -1
   
   let middle = Math.floor((left+right)/2)
   
   if(arr[middle] === target){
       return middle
   }else if(arr[middle]<target){
       return binaryrecursive(arr,target,middle+1,right)
   }else{
       return binaryrecursive(arr,target,left,middle-1)
   }
}
const array = [8,9,2,5,4,7,3]
array.sort((a,b)=> a-b)
console.log(array)
console.log(binaryrecursive(array,9))



function fib(num){
   let fibseries=[0,1]
   for(i=2;i<num;i++){
       fibseries.push(fibseries[i-1] + fibseries[i-2])
   }
   return fibseries
}
console.log("fininocci series",fib(10))