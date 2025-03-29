class Node {
   constructor(value){
      this.value = value
      this.next = null
   }
}

class LinkedList{
   constructor(){
      this.head = null 
   }
   addfirst(value){
      let newNode = new Node(value);
      newNode.next= this.head
      this.head = newNode
   }
   addLast(value){
      let newNode = new Node(value)
      if(!this.head){
         this.head = newNode
         return
      }
      let temp = this.head
      while(temp.next){
         temp = temp.next 
      }
      temp.next = newNode
   }

   insertAtPosition(value,position){
      if(position < 1){
         console.log("invalid position")
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

      while(temp !== null && i<position){
         prev = temp
         temp = temp.next
         i++
      }
      if (prev === null) {
         console.log("Position out of range");
         return;
      }

      newNode.next = temp
      prev.next = newNode

   }

   deletefirst(){
      if(!this.head){
         console.log("list is empty")
         return
      }
      this.head = this.head.next 
   }
   deleteLast (){
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
      temp.next =null
   }
   deleteAPosition(position){
      if(position < 1){
         console.log("invalid position")
         return
      }
      if(position ===1 ){
         this.head = this.head.next
         return
      }
      let temp= this.head
      let prev = null
      let i = 1

      while(temp !== null && i < position){
         prev = temp 
         temp = temp.next
         i++
      }
      if(temp === null){
         console.log("Position out of range");
         return;
      }
      prev.next = temp.next
   }
   findMiddle(){
      let slow = this.head
      let fast = this.head
      while(fast !== null && fast.next !== null){
         slow = slow.next
         fast = fast.next.next
      }
      console.log("middle element",slow?slow.value:"list is empty")
   }

   print(){
      let current = this.head
      while(current){
         console.log(current.value)
         current= current.next
      }
   }
}
let list = new LinkedList()

list.addfirst(10)
list.addfirst(20)
list.addfirst(30)
list.addfirst(40)
list.addLast(5)
// list.addLast(200)
// list.deletefirst() //last added node should delete
// list.deleteLast()
// list.insertAtPosition(50,3)
// list.deleteAPosition(5)
list.findMiddle()
 

list.print()
