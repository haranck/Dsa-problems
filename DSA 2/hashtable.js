// class HashTable{
//    constructor(size){
//        this.table = new Array(size)
//        this.size = size
//        this.count= 0
//    }
//    getLoadFactor(){
//        return this.count / this.size
//    }
   
//    hash(key){
//        let total = 0
//        for(let i = 0 ;i < key.length;i++){
//            total += key.charCodeAt(i)
//        }
//        return total % this.size
//    }
//    insert(key,value){
//        const index = this.hash(key)
//        if(!this.table[index]){
//            this.table[index] = []
//        }
//        this.table[index].push([key,value])
//        this.count++
       
//        if(this.getLoadFactor() > 0.75){
//            const newSize = Math.floor(this.size*2)
//            this.rehash(newSize)
//        }
//    }
//    get(key){
//        const index = this.hash(key)
//        if(!this.table[index])return undefined
//        for(let pair of this.table[index]){
//            if(pair[0]===key) return pair[1]
//        }
//        return undefined
//    }
//    remove(key){
//        const index = this.hash(key)
//        if(!this.table[index])return false
       
//        this.table[index] = this.table[index].filter((pair)=> pair[0] !== key)
//        this.count--
       
//        if(this.getLoadFactor() < 0.35){
//            const newSize = Math.floor(this.size / 2)
//            this.rehash(newSize)
//        }
       
//    }
//    rehash(size){
//        console.log("resizing to : ",size)
//        this.size = size
//        this.count =0
//        const oldTable = this.table
//        this.table = new Array(this.size)
       
//        for(let i = 0;i<oldTable.length;i++){
//            const bucket = oldTable[i]
//            if (!bucket) continue;
//            for(let j = 0;j<bucket.length;j++){
//                const [key,value] = bucket[j]
//                this.insert(key,value)
//            }
//        }
//    }
//    print(){
//        for(let i = 0; i< this.table.length;i++){
//            if(this.table[i]){
//            console.log(i,this.table[i])
//            }
//        }
//    }
// }

// const hash = new HashTable(50)

// hash.insert("name","haran")
// hash.insert("age",21)
// hash.insert("place","mankery")
// hash.insert(1,"number")
// hash.insert("pincode",45613)
// console.log(hash.get(1))
// // hash.remove(1)
// hash.print()

////////////////////////////////////////////////////////////////////

//nothing with this simple hashtable

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
    
//     }
 
//     hash(key){
//         let total = 0
//         for(let i = 0; i<key.length;i++){
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
//         if(!this.table[index]) return undefined
//         for(let pair of this.table[index]){
//             if(pair[0] === key) return pair[1]
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         if(!this.table[index])return false
        
//         this.table[index] = this.table[index].filter((pair)=>pair[0]!==key)
//     }
   
    
//     print(){
//         for(let i =0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//         console.log("size :",this.size)
//     }
// }

// const hash = new Hashtable(4)

// hash.insert("name","haran")
// hash.insert("place","Mankery")
// hash.insert("age",21)


// console.log(hash.get("name"))
// console.log(hash.get("place"))
// console.log(hash.get("age"))
// // hash.rehash()
// hash.print()

////////////////////////////////////////////////////////////////////

// linear probing and quadratic probing  

// (quadratic probing only change is equation i comes and equation i*i )

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let result = 0
//         for(let i =0;i<key.length;i++){
//             result += key.charCodeAt(i)
//         }
//         return result % this.size
//     }
//     insert(key,value){
//         let index = this.hash(key)
//         let i = 1
        
//         while(this.table[index]&& this.table[index][0] !== key){
//             index = (index + i * i) % this.size
//             i++
//         }
//         this.table[index] = [key,value]
//     }
//     get(key){
//         let index = this.hash(key)
//         let i =1
     
//         while(this.table[index]){
//             if(this.table[index][0] === key){
//                 return this.table[index][1]
//             }
//             index = (index+i*i) % this.size
//             i++
//         }
//         return undefined
//     }
//     remove(key){
//         let index = this.hash(key)
//         let i = 1
     
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 this.table[index] = null
//                 return true
//             }
//             index =(index+i*i)%this.size
//             i++
//         }
//         return false
//     }
//     print(){
//         for(let i = 0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//         console.log("size : ",this.size)
//     }
// }
// const hash = new Hashtable(50)
// hash.insert("name","haran")
// hash.insert("place","Mankery")
// hash.insert("age",21)
// hash.insert("IPL","RCB")
// console.log(hash.get("IPL"))
// hash.print()


// ////////////////////////////////////////////////////////////////////////

// double hashing   
//            ( hash2(key) {
//                 let hash = 0;
//                 for (let i = 0; i < key.length; i++) {
//                     hash += key.charCodeAt(i);
//                 }
//                 // Use a prime smaller than table size for modulus
//                 return 7 - (hash % 7);
//             }
//             index = (this.hash1(key) + i * stepSize) % this.size; )



// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash1(key){
//         let result = 0
//         for(let i =0;i<key.length;i++){
//             result += key.charCodeAt(i)
//         }
//         return result % this.size
//     }
//     hash2(key){
//         let result = 0
//         for(let i =0;i<key.length;i++){
//             result += key.charCodeAt(i)
//         }
//         return 7 -(result % 7)
//     }
//     insert(key,value){
//         let index = this.hash1(key)
//         let stepsize = this.hash2(key)
//         let i = 0
        
//         while(this.table[index]){
//             if(this.table[index][0] !== key){
//                 i++
//                 index = (index + i * stepsize) % this.size
//             }
//         }
//         this.table[index] = [key,value]
//     }
//     get(key){
//         let index = this.hash1(key)
//         let stepsize = this.hash2(key)
//         let i =0
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 return this.table[index][1]
//             }
//             i++
//             index = (this.hash1(key) + i * stepsize) & this.size
//         }
//         return undefined
//     }
//     remove(key){
//         let index = this.hash1(key)
//         let stepsize = this.hash2(key)
//         let i = 0
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 this.table[index] = null
//                 return true 
//             }
//             i++
//             index = (index + i * stepsize) % this.size
//         }
//         return false
//     }
//     print(){
//         for(let i = 0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//         console.log("size : ",this.size)
//     }
// }
// const hash = new Hashtable(50)
// hash.insert("name","haran")
// hash.insert("place","Mankery")
// hash.insert("age",21)
// hash.insert("IPL","RCB")
// console.log(hash.get("IPL"))
// hash.print()


class HashTable{
   constructor(size){
       this.table = new Array(size)
       this.size = size
   }
   hash1(key){
       let result =0
       for(let i = 0;i<key.length;i++){
           result += key.charCodeAt(i)
       }
       return result % this.size
   }
   hash2(key){
       let result = 0
       for(let i = 0;i<key.length;i++){
           result += key.charCodeAt(i)
       }
       return 7 -(result%7)
   }
   insert(key,value){
       let index = this.hash1(key)
       let stepsize = this.hash2(key)
       let i = 0
       
       while(this.table[index] && this.table[index][0] !== key){
           i++
           index = (index + i * stepsize) % this.size
       }
       this.table[index] = [key,value]
   }
   get(key){
       let index = this.hash1(key)
       let stepsize = this.hash2(key)
       let i = 0
       while(this.table[index]){
           if(this.table[index][0]===key){
               return this.table[index][1]
           }
           index = (index +i*stepsize) % this.size
       }
       return undefined
   }
   remove(key){
       let index = this.hash1(key)
       let stepsize = this.hash2(key)
       let i = 0
       while(this.table[index]){
           if(this.table[index][0]===key){
               this.table[index]=null
           }
           index=(index+i*stepsize)%this.size
       }
       return false
   }
   print(){
       for(let i =0;i<this.table.length;i++){
           if(this.table[i]){
               console.log(i,this.table[i])
           }
       }
   }
}
let hash = new HashTable(10)
hash.insert("name","haran")
hash.insert("place","mankery")
hash.insert("age","21")
hash.insert("pin","6952")
hash.remove("pin")
console.log(hash.get("age"))
hash.print()
