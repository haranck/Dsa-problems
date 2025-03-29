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
    addFirst(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
    addlast(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return
        }
        let temp = this.head
        while (temp.next) {
            temp = temp.next
        }
        temp.next = newNode
    }

    deleteposition(position) {
        if (position < 1) {
            console.log("invalid position")
            return
        }
        if (position === 1) {
            this.head = this.head.next
            return
        }
        let temp = this.head
        let prev = null
        let i = 1

        while (temp !== null && i < position) {
            prev = temp
            temp = temp.next
            i++
        }
        if (temp === null) {
            console.log("position out of range")
            return
        }
        prev.next = temp.next

    }
    addposition(value, position) {
        if (position < 1) {
            console.log("invalid position")
            return
        }
        let newNode = new Node(value)
        if (position === 1) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        let temp = this.head
        let prev = null
        let i = 1

        while (temp !== null && i < position) {
            prev = temp
            temp = temp.next
            i++
        }

        if (prev === null) {
            console.log("position out of range")
            return
        }

        newNode.next = temp
        prev.next = newNode
    }
    findMiddle() {
        let slow = this.head
        let fast = this.head
        let prev = null

        while (fast !== null && fast.next !== null) {
            prev = slow
            slow= slow.next
            fast = fast.next.next
        }
        console.log("Deleted middle element : ",slow.value)
        // prev.next = slow.next
    }
       reverse(){
           let prev = null
           let current = this.head
           while(current !== null){

               let nextNode= current.next
               current.next = prev 
               prev = current
               current = nextNode 
           }
           this.head = prev;
       }
    print() {
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}

const ll = new LinkedList()
ll.addFirst(5)
ll.addFirst(4)
ll.addFirst(3)
ll.addFirst(2)
ll.addFirst(1)
// ll.deleteposition(3)
ll.findMiddle()
ll.reverse()

ll.print()



