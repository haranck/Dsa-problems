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

/////////////////////////////////////////////////////////////////////

// implement stack using queue 

class Stack{
   constructor(){
      this.stack =[]
   }
   push(value){
      
   }
}