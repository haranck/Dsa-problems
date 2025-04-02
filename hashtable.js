class HashTable{
   constructor(size){
       this.table = new Array(size)
       this.size = size
       this.count= 0
   }
   getLoadFactor(){
       return this.count / this.size
   }
   
   hash(key){
       let total = 0
       for(let i = 0 ;i < key.length;i++){
           total += key.charCodeAt(i)
       }
       return total % this.size
   }
   insert(key,value){
       const index = this.hash(key)
       if(!this.table[index]){
           this.table[index] = []
       }
       this.table[index].push([key,value])
       this.count++
       
       if(this.getLoadFactor() > 0.75){
           const newSize = Math.floor(this.size*2)
           this.rehash(newSize)
       }
   }
   get(key){
       const index = this.hash(key)
       if(!this.table[index])return undefined
       for(let pair of this.table[index]){
           if(pair[0]===key) return pair[1]
       }
       return undefined
   }
   remove(key){
       const index = this.hash(key)
       if(!this.table[index])return false
       
       this.table[index] = this.table[index].filter((pair)=> pair[0] !== key)
       this.count--
       
       if(this.getLoadFactor() < 0.35){
           const newSize = Math.floor(this.size / 2)
           this.rehash(newSize)
       }
       
   }
   rehash(size){
       console.log("resizing to : ",size)
       this.size = size
       this.count =0
       const oldTable = this.table
       this.table = new Array(this.size)
       
       for(let i = 0;i<oldTable.length;i++){
           const bucket = oldTable[i]
           for(let i = 0;i<bucket.length;i++){
               const [key,value] = bucket[j]
               this.insert(key,value)
           }
       }
   }
   print(){
       for(let i = 0; i< this.table.length;i++){
           if(this.table[i]){
           console.log(i,this.table[i])
           }
       }
   }
}

const hash = new HashTable(50)

hash.insert("name","haran")
hash.insert("age",21)
hash.insert("place","mankery")
hash.insert(1,"number")
console.log(hash.get(1))
// hash.remove(1)
hash.print()










