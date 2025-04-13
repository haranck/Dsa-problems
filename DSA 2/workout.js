// function bubblesort(arr){
//     const n = arr.length
//     for(let i = 0;i < n ; i++){
//         for(let j = 0 ;j < n - i -1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubblesort([5,7,23,9,1]))





// function selectionsort(arr){
//     const n = arr.length
//     for(let i = 0;i<n;i++){
//         let minIndex = i
//         for(let j =i+1;j<n;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//     }
//     return arr

// }
// console.log(selectionsort([5,7,23,9,1]))





// const insertionsort = (arr) => {
//     const n = arr.length
//     for(let i = 1;i<n;i++){
//         let key = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }

// console.log(insertionsort([5,7,23,9,1]))





// function mergesort(arr){
//     if(arr.length < 2) return arr

//     let middle = Math.floor(arr.length / 2)
//     let left = mergesort(arr.slice(0,middle))
//     let right = mergesort(arr.slice(middle))

//     return merge(left ,right)
// }
// function merge(left,right){
//     let sortedArray = []
//     while(left.length && right.length){
//         if(left[0]>right[0]){
//             sortedArray.push(right.shift())
//         }else{
//             sortedArray.push(left.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]
// }
// console.log(mergesort([5,7,23,9,1]))




// function quicksort(arr){
//     if(arr.length <= 1) return arr

//     const pivot = arr[0]
//     let left = []
//     let right = []

//     for(let i = 1 ; i < arr.length ; i++){
//         if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }
// console.log(quicksort([5,7,23,9,1]))





// function mergesort(str){
//     if(str.length < 2) return str
//     let middle = Math.floor(str.length / 2)
//     let left = mergesort(str.slice(0,middle))
//     let right = mergesort(str.slice(middle))

//     return merge(left.split(""),right.split("")).join("")
// }
// function merge(left,right){
//     let sortedArray = []
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sortedArray.push(left.shift())
//         }else{
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]
// }

// console.log(mergesort("helloo"))




// function mergeSortedArrays(arr1,arr2){
//     let i = 0
//     let j = 0
//     let result = []

//     while( i < arr1.length && j < arr2.length){
//         if(arr1[i]<arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else{
//             result.push(arr2[j])
//             j++
//         }
//     }
//     while(i < arr1.length){
//         result.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length){
//         result.push(arr2[j])
//         j++
//     }
//     return result
// }
// let arr1 = [1, 3];
// let arr2 = [2, 4, 6 ];
// console.log(mergeSortedArrays(arr1, arr2));






// class LinkedList{
//     constructor(value){
//         this.value = value
//         this.next = null;
//     }
// }
// function print(l1){
//     let current = l1
//     let output = ''
//     while(current){
//         output += current.value + " > ";
//         current = current.next
//     }
//     console.log(output)
// }
// function mergelist(l1,l2){
//     if(!l1) return l1
//     if(!l2) return l2

//     if(l1.value > l2.value){
//         l2.next = mergelist(l1,l2.next)
//         return l2
//     }else{
//         l1.next = mergelist(l1.next,l2)
//         return l1
//     }
// }

// const l1  = new LinkedList(1)
// l1.next = new LinkedList(3)
// l1.next.next = new LinkedList(5)

// const l2  = new LinkedList(2)
// l2.next = new LinkedList(4)
// l2.next.next = new LinkedList(6)

// mergelist(l1,l2)

// print(l1)





// class Stack{
//     constructor(){
//         this.stack = []
//     }
//     push(value){
//         this.stack.push(value)
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return 
//         }
//         this.stack.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return 
//         }
//         return this.stack[this.stack.length-1]
//     }
//     isEmpty(){
//         return this.stack.length ===0
//     }
//     print(){
//         console.log("stack: ",this.stack)
//     }
// }
// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.peek())
// console.log(stack.isEmpty())

// stack.print()





// function reversestring(str){
//     const splits = str.split(" ")
//     const stack = []
//     for(let i = 0 ;i<splits.length;i++){ 
//         stack.push(splits[i])
//     }
//     let result = ""
//     while(stack.length){
//         let current = stack.pop()
//         if(current){
//             result += " "+current
//         }
//     }
//     return result.trim( )
// }
// console.log(reversestring("hey you are a gay"))





// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.head=null
//     }

//     push(value){
//         let newNode = new Node(value)
//         newNode.next = this.head
//         this.head = newNode
//     }
//     pop(){
//         if(!this.head) return 'stack is empty'
//         let popvalue = this.head.value
//         this.head = this.head.next
//         return popvalue        
//     }
//     peek(){
//         if(!this.head) return "stack is empty"
//         return this.head.value
//     }
//     print(){
//         let current = this.head
//         let values = []
//         while(current){
//             values.push(current.value)
//             current = current.next
//         }
//         console.log("Stack : ",values.join(" -> "))
//     }
// }

// let stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.peek())
// stack.pop()

// stack.print()




// class Stack{
//     constructor(){
//         this.q1 = []
//         this.q2 = []
//     }
//     push(value){
//         this.q2.push(value)
//         while(this.q1.length){
//             this.q2.push(this.q1.shift())
//         }
//         [this.q1,this.q2] = [this.q2,this.q1]
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }
//         return this.q1.shift()
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }
//         return this.q1[0]
//     }
//     isEmpty(){
//         return this.q1.length === 0 
//     }
//     print(){
//         console.log("stack",this.q1.join(" -> "))
//     }
// }

// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack.peek())

// stack.print()





// class Stack{
//     constructor(){
//         this.stack = []
//     }
//     push(value){
//         this.stack.push(value)
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return 
//         }
//         return this.stack.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return 
//         }
//         return this.stack[this.stack.length-1]
//     }
//     isEmpty(){
//         return this.stack.length ===0
//     }
//     print(){
//         console.log("stack: ",this.stack)
//     }
// }
// function insertAtBottom(stack,item){
//     if(stack.isEmpty()){
//         stack.push(item)
//         return
//     }
//     let top = stack.pop()
//     insertAtBottom(stack,item)
//     stack.push(top)
// }
// function reverseStack(stack){
//     if(stack.isEmpty())return 

//     let top = stack.pop()
//     reverseStack(stack)
//     insertAtBottom(stack,top)
// }
// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.peek())
// stack.print()

// reverseStack(stack)

// stack.print()




// class Queue{
//     constructor(){
//         this.q = []
//     }
//     enqueue(value){
//         this.q.push(value)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         return this.q.shift()
//     }
//     front(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         return this.q[0]
//     }
//     isEmpty(){
//         return this.q.length === 0
//     }
//     print(){
//         console.log("Queue : ",this.q.join(" -> "))
//     }
// }

// let queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// // queue.dequeue()
// console.log(queue.front())
// queue.print()





// class Queue{
//     constructor(){
//         this.stack1 = []
//         this.stack2 =[]
//     }
//     enqueue(value){
//         this.stack1.push(value)
//     }
//     dequeue(){
//         if(this.stack2.length ===0){
//             while(this.stack1.length > 0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
//     front(){
//         if(this.stack2.length ===0){
//             while(this.stack1.length > 0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2[this.stack1.length-1]
//     }
//     print(){
//         console.log("queue : ",[...this.stack2].concat(this.stack1).join(" -> "))
//     }

// }

// const queue= new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)

// queue.print()

// console.log("Dequeue : ",queue.dequeue())

// queue.print()






// class Node{
//     constructor(value){
//         this.value= value
//         this.next = null
//     }
// }
// class Queue{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     enqueue(value){
//         let newNode = new Node(value)

//         if(!this.head){

//             this.head = newNode
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }

//     }
//     dequeue(){
//         if (!this.head) {
//             console.log("Queue is empty");
//             return;
//         }
//         const removevalue = this.head.value
//         this.head = this.head.next

//         if(!this.head){
//             this.tail = null
//         }

//         return removevalue
//     }
//     front(){
//         if (!this.head) {
//             console.log("Queue is empty");
//             return;
//         }
//         return this.head.value
//     }
//     print(){
//         let current = this.head
//         let result =[]
//         while(current){
//             result.push(current.value)
//             current = current.next
//         }
//         console.log(result.join(' <- '))
//     }
// }

// let queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log("front",queue.front())
// // console.log("dequeued",queue.dequeue())

// queue.print()

//do more about que implementation using linkedllist





// class Hashtable{
//     constructor(size){
//         this.table = new Array (size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i = 0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     insert(key,value){
//         const index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index] = []
//         }
//         this.table[index].push([key,value])
//     }
//     get(key){
//         const index = this.hash(key)
//         if(!this.table[index])undefined
//         for(let pair of this.table[index]){
//             if(pair[0]===key)return pair[1]
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         if(!this.table[index])return null
        
//         this.table[index] =  this.table[index].filter(pair=>pair[0]!==key)
//     }
//     print(){
//         for(let i =0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// const hash = new Hashtable(50)
// hash.insert("name","haran")
// hash.insert("age",21)
// hash.insert("place","mankery")
// hash.insert("hey","hoii")

// hash.print()





// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//         this.count = 0
        
//     }
//     getLoadFactor(){
//         return this.count / this.size
//     }
//     hash(key){
//         let total = 0
//         for(let i =0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     insert(key,value){
//         let index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index] = []
//         }
//         this.table[index].push([key,value])
//         this.count++
//         if(this.getLoadFactor() > 0.75){
//             const newSize = Math.floor(this.size*2)
//             this.rehash(newSize)
//         }
//     }
//     get(key){
//         let index = this.hash(key)
//         if(!this.table[index])return undefined
//         for(let pair of this.table[index]){
//             if(pair[0]===key)return pair[1]
//         }
//         return undefined
        
//     }
//     remove(key){
//         let index = this.hash(key)
//         if(!this.table[index])return false
//         this.table[index] = this.table[index].filter(pair => pair[0]!==key)
//         this.count--
//         if(this.getLoadFactor() < 0.3){
//             let newSize = Math.floor(this.size / 2)
//             this.rehash(newSize)
//         }
//     }
//     rehash(size){
//         console.log("resising to : ",size)
//         this.size = size
//         this.count = 0
//         const oldTable = this.table
//         this.table = new Array(this.size)
        
//         for(let i = 0;i<oldTable.length;i++){
//             let bucket = oldTable[i]
//             if(bucket){
//                 for(let j =0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     this.insert(key,value)
//                 }
//             }
//         }
//     }
//     print(){
//        for(let i =0; i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }     
// }

// const hash = new Hashtable(5)

// hash.insert("name","haran")
// hash.insert("age",21)
// hash.insert("place","mankery")
// hash.insert(1,"number")
// hash.insert("pincode",45613)
// console.log(hash.get(1))
// hash.remove(1)
// hash.remove("place")
// hash.remove("name")
// hash.remove("place")
// hash.print()





