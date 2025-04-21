// // binary tree 

// class TreeNode{
//    constructor(value){
//       this.value = value
//       this.left = null
//       this.right = null
//    }
// }

// class BinaryTree{
//    constructor(){
//       this.root = null
//    }
//    insert(value){
//       const newNode = new TreeNode(value)
//       if(!this.root){
//          this.root = newNode
//          return
//       }
//       const queue = [this.root]
//       while(queue.length > 0){
//          const current = queue.shift()

//          if(!current.left){
//             current.left = newNode
//             break
//          }else{
//             queue.push(current.left)
//          }

//          if(!current.right){
//             current.right = newNode
//             break
//          }else{
//             queue.push(current.right)
//          }
//       }
//    }

//    inorder(node){
//       if(!node)return
//       this.inorder(node.left)
//       console.log(node.value)
//       this.inorder(node.right)
//    }
//    preorder(node){
//       if(!node)return
//       console.log(node.value)
//       this.preorder(node.left)
//       this.preorder(node.right)
//    }
//    postorder(node){
//       if(!node)return
//       this.postorder(node.left)
//       this.postorder(node.right)
//       console.log(node.value)
//    }
// }

// const tree = new BinaryTree()
// const arr = [1,2,3,4,5]
// arr.forEach(value=> tree.insert(value))

// console.log("inorder")
// tree.inorder(tree.root)

// console.log("preorder")
// tree.preorder(tree.root)

// console.log("postorder")
// tree.postorder(tree.root)



//////////////////////////////////////////////////////////////////////////////////

// binary serch treee  deletetion

// class Node {
//    constructor(value) {
//       this.value = value
//       this.left = null
//       this.right = null
//    }
// }
// class BST {
//    constructor() {
//       this.root = null
//    }
//    insert(value) {
//       let newNode = new Node(value)

//       if (!this.root) {
//          this.root = newNode
//          return
//       }
//       let current = this.root

//       while (true) {
//          if (value < current.value) {
//             if (!current.left) {
//                current.left = newNode
//                return
//             }
//             current = current.left
//          } else {
//             if (!current.right) {
//                current.right = newNode
//                return
//             }
//             current = current.right
//          }
//       }
//    }

//    findMinNode(node) {
//       while (node.left) {
//          node = node.left
//       }
//       return node
//    }

//    deleteNode(root, key) {
//       if (!root) return null

//       if (key < root.value) {
//          root.left = this.deleteNode(root.left, key)
//       } else if (key > root.value) {
//          root.right = this.deleteNode(root.right, key)
//       } else {
//          if (!root.left && !root.right) {
//             return null
//          }

//          if (!root.right) return root.left
//          if (!root.left) return root.right

//          const minNode = this.findMinNode(root.right)
//          root.value = minNode.value
//          root.right = this.findMinNode(root.right,minNode.value)
//       }
//       return root
//    }
//    delete(key) {
//       this.root = this.deleteNode(this.root, key)
//    }

//    inorder(root = this.root){
//       if(root){ 
//          this.inorder(root.left)
//          console.log(root.value)
//          this.inorder(root.right)
//       }
//    }  
// }


// const tree = new BST();
// tree.insert(50);
// tree.insert(30);
// tree.insert(20);
// tree.insert(40);
// tree.insert(70);
// tree.insert(60);
// tree.insert(80);

// console.log("Before delete:");
// tree.inorder();

// tree.delete(50);  // Try deleting a node with two children

// console.log("After delete:");
// tree.inorder();


//////////////////////////////////////////////////////////////////////////////////////////////////

// // closest value of a target element

// class Node{
//    constructor(value){
//       this.value =  value
//       this.left = null
//       this.right = null
//    }
// }

// class BST{
//    constructor(){
//       this.root =  null
//    }
//    insert(value){
//       const newNode = new Node(value)
//       if(!this.root){
//          this.root = newNode
//          return
//       }
//       let current =  this.root

//       while(true){
//          if(value < current.value){
//             if(!current.left){
//                current.left = newNode
//                return
//             }
//             current = current.left
//          }else{
//             if(!current.right){  
//                current.right = newNode
//                return
//             }
//             current = current.right
//          }
//       }
//    }
//    findclosest(target){
//       let current = this.root
//       let closest = current.value

//       while(current){
//          if(Math.abs(target - current.value) < Math.abs(target - closest)){
//             closest = current.value
//          }

//          if(target < current.value){
//             current = current.left
//          }else if(target > current.value){
//             current = current.right
//          }else{
//             break;
//          }
//       }
//       return closest
//    }
// }

// const tree = new BST()

// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(40)
// tree.insert(50)

// const target = 25

// console.log("closest to ",target,": ",tree.findclosest(target))


//////////////////////////////////////////////////////////////////////////////////////

//kth smallest number

// class Node{
//    constructor(value){
//       this.value = value
//       this.left = null
//       this.right = null
//    }
// }
// class BST{
//    constructor(){
//       this.root = null
//    }
//    insert(value){
//       let newNode = new Node(value)
//       if(!this.root){
//          this.root = newNode
//          return  
//       }
//       let current = this.root

//       while(true){
//          if(value < current.value){
//             if(!current.left){
//                current.left =  newNode
//                return
//             }
//             current = current.left
//          }else{
//             if(value>current.value){
//                if(!current.right){
//                   current.right = newNode
//                   return
//                }
//                current = current.right
//             }
//          }
//       }
//    }
//    kthSmallest(root,k){
//       let count = 0
//       let result = null

//       function inorder(node){
//          if(!node || result !== null) return 
//          inorder(node.left)

//          count++
//          if(count === k){
//             result = node.value
//             return 
//          }

//          inorder(node.right)
//       }
//       inorder(root)
//       return result
//    }
// }


// const tree = new BST()

// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(40)
// tree.insert(50)

// const k = 4
// const answer = tree.kthSmallest(tree.root,k)
// console.log(answer)


///////////////////////////////////////////////////////////////////////////////////

// find first smallest second smallest third smallest

// class Node{
//    constructor(value){
//       this.value = value
//       this.left = null
//       this.right = null
//    }
// }
// class BST{
//    constructor(){
//       this.root = null;
//    }
//    insert(value){
//       let newNode = new Node(value)
//       if(!this.root){
//          this.root = newNode
//          return
//       }
//       let current = this.root
//       while(true){
//          if(value < current.value){
//             if(!current.left){
//                current.left = newNode
//                return
//             }
//             current = current.left
//          }else{
//             if(!current.right){
//                current.right = newNode
//                return
//             }
//             current = current.right
//          }

//       }
//    }
//    findsmallestk(k){
//       let result = null
//       let count = 0
//       function inorder(node){
//          if(!node || count >= k) return

//          inorder(node.left)

//          count++
//          if(count === k ){
//             result = node.value
//             return
//          }

//          inorder(node.right)
//       }
//       inorder(this.root)
//       return result
//    }
// }

// const tree = new BST()

// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(40)
// tree.insert(50)


// const answer1 = tree.findsmallestk(1)
// const answer2= tree.findsmallestk(2)
// const answer3= tree.findsmallestk(3)
// console.log(answer1)
// console.log(answer2)
// console.log(answer3)


////////////////////////////////////////////////////////////////////////////////////

// first highest second highest third highest


// class Node{
//    constructor(value){
//       this.value = value
//       this.left = null
//       this.right = null
//    }
// }
// class BST{
//    constructor(){
//       this.root = null;
//    }
//    insert(value){
//       let newNode = new Node(value)
//       if(!this.root){
//          this.root = newNode
//          return
//       }
//       let current = this.root
//       while(true){
//          if(value < current.value){
//             if(!current.left){
//                current.left = newNode
//                return
//             }
//             current = current.left
//          }else{
//             if(!current.right){
//                current.right = newNode
//                return
//             }
//             current = current.right
//          }

//       }
//    }
//    findKLargest(k) {
//       let result = null;
//       let count = 0;

//       function inorder(node) {
//           if (!node || count >= k) return;

//           inorder(node.right); //start from right for highest section

//           count++;
//           if (count === k) {
//               result = node.value;
//               return;
//           }

//           inorder(node.left); 
//       }

//       inorder(this.root);
//       return result;
//   }

// }

// const tree = new BST()

// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(40)
// tree.insert(50)

// const k = 1
// const answer = tree.findKLargest(k)
// console.log(answer)


////////////////////////////////////////////////////////////////////////////////

// checking is this is a bst 


class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BST {
   constructor() {
      this.root = null;
   }

   insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
         this.root = newNode;
         return;
      }

      let current = this.root;
      while (true) {
         if (value < current.value) {
            if (!current.left) {
               current.left = newNode;
               return;
            }
            current = current.left;
         } else {
            if (!current.right) {
               current.right = newNode;
               return;
            }
            current = current.right;
         }
      }
   }
}

function isValidBst(root) {
   let prev = -Infinity;

   function inorder(node) {
      if (!node) return true;

      if (!inorder(node.left)) return false;

      if (node.value <= prev) return false;
      prev = node.value;

      return inorder(node.right);
   }

   return inorder(root);
}

const tree = new BST();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(15);

const result = isValidBst(tree.root);
console.log("Is this a BST ?", result?"Yes":"No");













