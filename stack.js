// class Stack{
//    constructor(){
//       this.stack =[]
//    }

//    push(element){
//       this.stack.push(element)
//    }
//    pop(){
//       if(this.isEmpty()){
//          console.log("stack is empty- pop")
//          return
//       }

//       return this.stack.pop()
//    }
//    peek(){
//       if(this.isEmpty()){
//          console.log("stack is empty -peek")
//          return
//       }
//       return this.stack[this.size()-1]
//    }
//    isEmpty(){
//       return this.size() ===0 
//    }
//    size(){
//       return this.stack.length
//    }
//    print(){
//       console.log("Stack:", this.stack);
//    }
// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)

// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.isEmpty())
// console.log(stack.size())
// stack.print()

////////////////////////////////////////////////////////////////////

// reverse the string use stack

// function reverseword(str){
//    const splits = str.split(" ")
//    const stack =[]
//    for(let i=0;i<splits.length;i++){
//       stack.push(splits[i])
//    }
//    let finals =""
//    while(stack.length){
//       let current = stack.pop()
//       if(current){
//          finals += " "+current
//       }
//    }
//    return finals.trim()
// }

// console.log(reverseword("you are gay"))  

/////////////////////////////////////////////////////////////////////////////


// implement stack using queue 

// class Stack {
//    constructor() {
//      this.q1 = [];
//      this.q2 = [];
//    }
 
//    push(x) {
//      this.q2.push(x);
 
//      while (this.q1.length) {
//        this.q2.push(this.q1.shift());
//      }
 
//      [this.q1, this.q2] = [this.q2, this.q1];
//    }
 
//    pop() {
//      return this.q1.shift(); 
//    }
 
//    peek() {
//      return this.q1[0];
//    }
 
//    print() {
//      console.log("Stack:", this.q1);
//    }
//  }
 

 //////////////////////////////////////////////////////////////////////////

   // stack implementation using Linkedlist

//  class Node{
//    constructor(value){
//        this.value = value
//        this.next = null
//    }
// }

// class Stack{
//    constructor(){
//        this.head = null
//    }
//    push(value){
//        const newNode = new Node(value)
//        newNode.next =  this.head
//        this.head = newNode
//    }
//    pop(){
//        if(!this.head)return "stack is empty"
//        const popvalue = this.head.value
//        this.head = this.head.next
//        return popvalue
//    }   
//    peek(){
//        if(!this.head)return "staack is empty"
//        return this.head.value
//    }
//    print(){
//        let current = this.head
//        let values = []
//        while(current){
//            values.push(current.value)
//            current = current.next
//        }
//        console.log("List : ",values.join(" -> ") )
//    }
   
// }

// const stack = new Stack()

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.print(); 

// console.log("Peek:", stack.peek()); 
// console.log("Popped:", stack.pop()); 
// stack.print(); 

/////////////////////////////////////////////////////////////////////////////////

// stack reversing using recursion

class Stack {
   constructor() {
       this.stack = []
   }

   push(value) {
       this.stack.push(value)
   }

   pop() {
       if (this.isEmpty()) {
           console.log("it's empty")
           return;
       }
       return this.stack.pop(); 
   }

   peek() {
       if (this.isEmpty()) {
           console.log("it's empty")
           return;
       }
       return this.stack[this.stack.length - 1];
   }

   isEmpty() {
       return this.stack.length === 0;
   }

   print() {
       console.log(this.stack);
   }
}
function insertAtBottom(stack,item){
   if(stack.isEmpty()){
       stack.push(item)
       return
   }
   let top = stack.pop()
   insertAtBottom(stack,item)
   stack.push(top)
}

function reverseStack(stack){
   if(stack.isEmpty())return 
   
   let top = stack.pop()
   reverseStack(stack)
   insertAtBottom(stack,top)
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("top : ",stack.peek())
console.log("Original Stack:");
stack.print();

reverseStack(stack);

console.log("Reversed Stack:");

stack.print();

