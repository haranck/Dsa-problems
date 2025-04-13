// class Queue{
//    constructor(){
//       this.queue = []
//    }
//    enqueue(element){
//       this.queue.push(element)
//    }
//    dequeue(){
//       if(this.isEmpty()){
//          console.log("queue is empty dequeue not work")
//          return
//       }
//       return this.queue.shift()
//    }
//    isEmpty(){
//       return this.size() === 0
//    }
//    front(){
//       if(this.isEmpty()){
//          console.log("queue is empty dequeue not work")
//          return
//       }
//       return this.queue[0]
//    }
//    size(){
//       return this.queue.length
//    }
//    print(){
//       console.log("Queue",this.queue)
//    }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)

// // queue.dequeue()
// console.log(queue.front())
// console.log(queue.size()) 
// console.log(queue.isEmpty()) 
// queue.print()


///////////////////////////////////////////////////////////////////////////////

// circular quue

class circularQueue{
   constructor(k){
      this.queue = []
      this.size = k
   }
   enqueue(value){
      if(this.size === this.queue.length) {
         console.log(" its fulll")
         return
      }
      this.queue.push(value)
   }
   dequeue(){
      if(this.queue.length === 0) return "dequeue not possible"
      return this.queue.shift()
   }
   front(){
      if(this.queue.length === 0) return "not possible"
      return this.queue[0]
   }
   rear(){
      if(this.queue.length === 0) return "not possible"
      return this.queue[this.queue.length-1]
   }
   isEmpty(){
      return this.queue.length ===0
   }
   isFull(){
      return this.queue.length === this.size
   }
   print(){
      console.log("Circular",this.queue)
   }
}

const circular = new circularQueue(3)

circular.enqueue(10)
circular.enqueue(20)
circular.enqueue(30)
circular.enqueue(40)

// circular.dequeue()

console.log("front",circular.front())
console.log("rear",circular.rear())
console.log(circular.isEmpty()) 
console.log(circular.isFull()) 
circular.print()


////////////////////////////////////////////////////////////////////////////////////

// implement queue using stack

// class Queue{
//    constructor(){
//        this.stack1 =[]
//        this.stack2 = []
//    }
//    enqueue(value){
//        this.stack1.push(value)
//    }
//    //[2,8,6]
//    //[6,8,2]
//    dequeue(){
//        if(this.stack2.length === 0){
//            while(this.stack1.length > 0){
//                this.stack2.push(this.stack1.pop())
//            }
//        }
//        return this.stack2.pop()
//    }
//    front(){
//        if(this.stack2.length === 0){
//            while(this.stack1.length > 0){
//                this.stack2.push(this.stack1.pop())
//            }
//        }
//        return this.stack2[this.stack2.length - 1]
//    }
//    isempty(){
//        return this.stack2.length === 0 && this.stack1.length ===0
//    }
//    print(){
//        console.log([...this.stack2].concat(this.stack1))
//    }
// }

// const queue = new Queue()

// queue.enqueue(2)
// queue.enqueue(8)
// queue.enqueue(6)

// // queue.dequeue()
// console.log(queue.front())
// console.log(queue.isempty());

// queue.print()

/////////////////////////////////////////////////////////////////////////////////

// linked list reversing

// class ListNode {
//    constructor(value) {
//        this.value = value;
//        this.next = null;
//    }
// }

// function mergeSortedLists(l1, l2) {
//    if (!l1) return l2
//    if (!l2) return l1 

//    if (l1.value < l2.value) {
//        l1.next = mergeSortedLists(l1.next, l2); 
//        return l1;
//    } else {
//        l2.next = mergeSortedLists(l1, l2.next);
//        return l2;
//    }
// }

// function printList(head) {
//    let current = head;
//    let result = [];
//    while (current) {
//        result.push(current.value);
//        current = current.next;
//    }
//    console.log(result.join(" -> "));
// }

// let l1 = new ListNode(1);
// l1.next = new ListNode(3);
// l1.next.next = new ListNode(5);

// let l2 = new ListNode(2);
// l2.next = new ListNode(4);
// l2.next.next = new ListNode(6);

// let mergedList = mergeSortedLists(l1, l2);
// printList(mergedList); 


/////////////////////////////////////////////////////////////////////////////////



//reverse queue

// class Queue {
//    constructor() {
//        this.items = [];
//    }

//    enqueue(item) {
//        this.items.push(item);
//    }

//    dequeue() {
//        if (this.isEmpty()) return null;
//        return this.items.shift();
//    }

//    front() {
//        return this.items[0];
//    }

//    isEmpty() {
//        return this.items.length === 0;
//    }

//    printQueue() {
//        console.log(this.items.join(" -> "));
//    }
// }

// // Function to reverse the queue using recursion
// function reverseQueue(queue) {
//    if (queue.isEmpty()) return;

//    let front = queue.dequeue();
//    reverseQueue(queue);
//    queue.enqueue(front);
// }

// // Example Usage
// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);

// console.log("Original Queue:");
// queue.printQueue();

// reverseQueue(queue);

// console.log("Reversed Queue:");
// queue.printQueue();