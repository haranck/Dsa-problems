class Queue{
   constructor(){
      this.queue = []
   }
   enqueue(element){
      this.queue.push(element)
   }
   dequeue(){
      if(this.isEmpty()){
         console.log("queue is empty dequeue not work")
         return
      }
      return this.queue.shift()
   }
   isEmpty(){
      return this.size() === 0
   }
   front(){
      if(this.isEmpty()){
         console.log("queue is empty dequeue not work")
         return
      }
      return this.queue[0]
   }
   size(){
      return this.queue.length
   }
   print(){
      console.log("Queue",this.queue)
   }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

// queue.dequeue()
console.log(queue.front())
console.log(queue.size()) 
console.log(queue.isEmpty()) 
queue.print()


///////////////////////////////////////////////////////////////////////////////

// circular quue

// class circularQueue{
//    constructor(k){
//       this.queue = []
//       this.size = k
//    }
//    enqueue(value){
//       if(this.size === this.queue.length) {
//          console.log(" its fulll")
//          return
//       }
//       this.queue.push(value)
//    }
//    dequeue(){
//       if(this.queue.length === 0) return "dequeue not possible"
//       return this.queue.shift()
//    }
//    front(){
//       if(this.queue.length === 0) return "not possible"
//       return this.queue[0]
//    }
//    rear(){
//       if(this.queue.length === 0) return "not possible"
//       return this.queue[this.queue.length-1]
//    }
//    isEmpty(){
//       return this.queue.length ===0
//    }
//    isFull(){
//       return this.queue.length === this.size
//    }
//    print(){
//       console.log("Circular",this.queue)
//    }

// }

// const circular = new circularQueue(3)

// circular.enqueue(10)
// circular.enqueue(20)
// circular.enqueue(30)
// circular.enqueue(40)

// // circular.dequeue()

// console.log("front",circular.front())
// console.log("rear",circular.rear())
// console.log(circular.isEmpty()) 
// console.log(circular.isFull()) 
// circular.print()


////////////////////////////////////////////////////////////////////////////////////

// implement queue using stack

// class Myqueue{
//    constructor(){
//       this.stack1 =[]
//       this.stack2 =[]
//    }
//    // stack1 =[2,8,6] // lifo so 6 is last but use queue fifo isted of 6 remove 2
//    // stack2 =[6,8,2]

//    enqueue(value){
//       return this.stack1.push(value)
//    }
//    dequeue(){
//       if(this.stack2.length === 0){
//          while(this.stack1.length > 0){
//             this.stack2.push(this.stack1.pop())
//          }
//       }
//       return this.stack2.pop()
//    }
//    front(){
//       if(this.stack2.length === 0){
//          while(this.stack1.length >0){
//             this.stack2.push(this.stack1.pop())
//          }
//       }
//       return this.stack2[this.stack2.length -1]
//    }
//    isEmpty(){
//       return this.stack1.length === 0 && this.stack2.length === 0
//    }
//    print(){
//       console.log("Queue",this.stack2)
//    }
// }

// const queue = new Myqueue()

// queue.enqueue(2)
// queue.enqueue(8)
// queue.enqueue(6)

// // queue.dequeue()
// console.log(queue.front())
// console.log(queue.isEmpty());

// queue.print()

/////////////////////////////////////////////////////////////////////////////////

// implement stack using queue

// class Myqueue{
//    constructor(){
//       this.q1 = []
//       this.q2 = []
//    }
//    push(value){
//       if(this.q2.length === 0){                 /* if(this.q1.length !== 0)*/
//          while(this.q1.length >0){
//             this.q2.push(this.q1.shift())  // for same array duplicated 
//          }
//       }
//       this.q1.push(value)
//       while(this.q2.length>0){
//          this.q1.push(this.q2.shift())
//       }
//    }
//    pop(){
//       return this.q1.shift()
//    }
//    peek(){
//       return this.q1[0]
//    }
//    isEmpty(){
//       return this.q1.length === 0
//    }
//    print(){
//       console.log("Queue",this.q1)
//    }
   
// }
// const queue =  new Myqueue()

// queue.push(5)
// queue.push(8)
// queue.push(2)

// queue.pop()
// console.log(queue.peek())
// queue.print()