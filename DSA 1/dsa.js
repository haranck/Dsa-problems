class Node {
   constructor(value) {
      this.value = value; // Data
      this.next = null;   // Pointer to next node
   }
}

class LinkedList {
   constructor() {
      this.head = null; // First node of the list
   }

   // 1. Insert at the beginning
   insertAtBeginning(value) {
      let newNode = new Node(value);
      newNode.next = this.head; // New node points to old head
      this.head = newNode; // New node becomes head
   }

   // 2. Insert at the end
   insertAtEnd(value) {
      let newNode = new Node(value);
      if (!this.head) { // If list is empty, make newNode head
         this.head = newNode;
         return;
      }
      let temp = this.head;
      while (temp.next) { // Traverse to the last node
         temp = temp.next;
      }
      temp.next = newNode; // Set the last node's next to newNode
   }

   // 3. Insert at a specific position
   insertAtPosition(value, position) {
      if (position < 1) {
         console.log("Invalid position");
         return;
      }
      let newNode = new Node(value);
      if (position === 1) { // If inserting at head
         newNode.next = this.head;
         this.head = newNode;
         return;
      }
      let temp = this.head;
      let prev = null;
      let i = 1;

      while (temp !== null && i < position) {
         prev = temp;
         temp = temp.next;
         i++;
      }

      if (temp === null) {
         console.log("Position out of range");
         return;
      }

      newNode.next = temp;
      prev.next = newNode;
   }

   // 4. Delete from beginning
   deleteFromBeginning() {
      if (!this.head) {
         console.log("List is empty");
         return;
      }
      this.head = this.head.next;
   }

   // 5. Delete from end
   deleteFromEnd() {
      if (!this.head) {
         console.log("List is empty");
         return;
      }
      if (!this.head.next) { // Only one node
         this.head = null;
         return;
      }
      let temp = this.head;
      while (temp.next.next) { // Traverse to second-last node
         temp = temp.next;
      }
      temp.next = null; // Remove last node
   }

   // 6. Delete from a specific position
   deleteFromPosition(position) {
      if (!this.head) {
         console.log("List is empty");
         return;
      }
      if (position === 1) { // If deleting head
         this.head = this.head.next;
         return;
      }
      let temp = this.head;
      let prev = null;
      let i = 1;

      while (temp !== null && i < position) {
         prev = temp;
         temp = temp.next;
         i++;
      }

      if (temp === null) {
         console.log("Position out of range");
         return;
      }

      prev.next = temp.next;
   }

   // 7. Search for a value
   search(value) {
      let temp = this.head;
      let position = 1;
      while (temp) {
         if (temp.value === value) {
            console.log(`Value found at position: ${position}`);
            return;
         }
         temp = temp.next;
         position++;
      }
      console.log("Value not found");
   }

   // 8. Display the list
   display() {
      let temp = this.head;
      let list = "";
      while (temp) {
         list += temp.value + " -> ";  
         temp = temp.next;
      }
      console.log(list + "null");
   }

   // 9. Reverse the linked list
   reverse() {
      let prev = null;
      let current = this.head;
      let next = null;

      while (current) {
         next = current.next; // Store next node
         current.next = prev; // Reverse current node's pointer
         prev = current; // Move prev one step forward
         current = next; // Move current one step forward
      }
      this.head = prev; // Update head to last node
   }
}


let list = new LinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.display(); // 10 -> 20 -> 30 -> null

// list.insertAtBeginning(5);
// list.display(); // 5 -> 10 -> 20 -> 30 -> null

// list.insertAtPosition(15, 3);
// list.display(); // 5 -> 10 -> 15 -> 20 -> 30 -> null

// list.deleteFromBeginning();
// list.display(); // 10 -> 15 -> 20 -> 30 -> null

// list.deleteFromEnd();
// list.display(); // 10 -> 15 -> 20 -> null

// list.deleteFromPosition(2);
// list.display(); // 10 -> 20 -> null

// list.search(10); // Value found at position: 1
// list.search(50); // Value not found

// list.reverse();
// list.display(); // 20 -> 10 -> null                            
