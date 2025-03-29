class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

class LinkedList {
   constructor() {
      this.head = null
   }
   addFirst(value){
      let newNode = new Node(value)
      newNode.next = this.head
      this.head =  newNode
   }
   addLast(value){
      let newNode = new Node(value)
      if(!this.head){
         console.log("list is empty")
         return
      }
      let temp = this.head
      while(temp.next){
         temp = temp.next
      }
      temp.next = newNode
   }
   addAt(value,position){
      if(position < 1){
         console.log("invalid postition")
         return
      }
      let newNode = new Node(value)
      if(position === 1){
         newNode.next = this.head
         this.head = newNode
         return
      }
      let temp = this.head
      let prev = null
      let i = 1
      while( temp !== null && i < position){
         prev = temp 
         temp = temp.next
         i++
      }
      if(temp === null){
         console.log("position out of range")
         return
      }
      newNode.next= temp
      prev.next = newNode

   }
   deleteFirst(){
      if(!this.head){
         console.log("list is empty")
         return
      }
      this.head = this.head.next
   }
   deleteLast(){
      if(!this.head){
         console.log("list is empty")
         return
      }
      if(!this.head.next){
         this.head = null
         return
      }
      let temp = this.head
      while(temp.next.next){
         temp = temp.next
      }
      temp.next = null
   }
   deleteAt(position){
      if(!this.head){
         console.log("list is empty")
         return
      }
      if(position===1){
         this.head = this.head.next
         return
      }
      let temp = this.head
      let prev = null
      let i =1

      while(temp !== null && i < position){
         prev = temp
         temp =  temp.next
         i++
      }
      
      if(prev===null){
         console.log("position out of range")
         return
      }
      prev.next = temp.next

   }
   reverse(){
      let current = this.head
      let prev = null
      while(current !== null){
         let nextNode = current.next
         current.next = prev
         prev = current
         current = nextNode
      }
      this.head = prev
   }

   print(){
      let temp = this.head
      while(temp){
         console.log(temp.value)
         temp = temp.next
      }
   }
}
const ll = new LinkedList()

ll.addFirst(10)
ll.addFirst(20)
ll.addFirst(30)
// ll.addLast(100)
// ll.addAt(1000,2)
// ll.deleteAt(3)
ll.reverse()   

ll.print()
