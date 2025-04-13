
// function mergeSort(arr){
//    if(arr.length < 2)return arr

//    let middle = Math.floor(arr.length / 2)
//    let left = mergeSort(arr.slice(0,middle))
//    let right = mergeSort(arr.slice(middle))

//    return merge(left,right)
// }

// function merge(left,right){
//    let sortedArray =[]
//    while(left.length && right.length){
//       if(left[0]>right[0]){
//          sortedArray.push(right.shift())
//       }else{
//          sortedArray.push(left.shift())
//       }
//    }
//    return [...sortedArray,...left,...right]
// }

// console.log(mergeSort([5,9,6,3,7,8]))

//arr = [5,8,9,4,3,1]

// function mergeSort(arr){
//    if(arr.length<2)return arr

//    let middle= Math.floor(arr.length/2)
//    let left = mergeSort(arr.slice(0,middle))
//    let right = mergeSort(arr.slice(middle))

//    return merge(left,right)
// }
// function merge(left,right){
//    let sortedArray = []
//    while(left.length&&right.length){
//       if(left[0]>right[0]){
//          sortedArray.push(right.shift())
//       }else{
//          sortedArray.push(left.shift())
//       }
//    }
//    return [...sortedArray,...left,...right]
// }

// console.log(mergeSort([5,8,9,4,3,1]))


//////////////////////////////////////////////////////////////////////////////

// sort a string using mergeSort

function stringsort(str){
   if(str.length<2) return str

   let middle = Math.floor(str.length/2)
   let left = stringsort(str.slice(0,middle))
   let right = stringsort(str.slice(middle))

   return merge(left.split(),right.split()).join("")
}
function merge(left,right){
   let sortedArray = []
   while(left.length&&right.length){ 
      if(left[0]>right[0]){
         sortedArray.push(right.shift())
      }else{
         sortedArray.push(left.shift())
      }
   }
   return [...sortedArray,...left,...right]
}

console.log(stringsort("hello"))
console.log(stringsort("cba"))

/////////////////////////////////////////////////////////////////////////////

//sort array of string using merge

function stringsort(arr){
   if(arr.length<2) return arr
   let middle = Math.floor(arr.length/2)
   let left = stringsort(arr.slice(0,middle))
   let right = stringsort(arr.slice(middle))

   return merge(left,right)
}
function merge(left,right){
   let sortedArray = []
   while(left.length&&right.length){
      if(left[0].toLowerCase() >right[0].toLowerCase()){
         sortedArray.push(right.shift())
      }else{
         sortedArray.push(left.shift())
      }
   }
   return [...sortedArray,...left,...right]
} 

console.log(stringsort(["banana", "Apple", "cherry", "grape", "orange", "kiwi"]))

/////////////////////////////////////////////////////////////////////////

// merge two linked list

class LinkedList{
   constructor(value){
       this.value = value
       this.next = null
   }
}
function sortedList(l1,l2){
   if(!l1) return l1
   if(!l2) return l2
   
   if(l1.value>l2.value){
       l2.next = sortedList(l1,l2.next)
       return l2
   }else{
       l1.next = sortedList(l1.next,l2)
       return l1
   }
}  
function print(head){
   let result = []
   while(head){
       result.push(head.value)
       head = head.next
   }
   return console.log(result.join(" -> "))
}


let l1 = new LinkedList(1)
l1.next = new LinkedList(3)
l1.next.next = new LinkedList(5)

let l2 = new LinkedList(2)
l2.next = new LinkedList(4)
l2.next.next = new LinkedList(6)

let mergeList = sortedList(l1,l2)

print(mergeList)