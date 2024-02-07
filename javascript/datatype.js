// primitive call by values 
// String
// Number
// boolearn
// null
// undefined
// Symbol
// BigInt

// reference (non-primitive)
// memory me reference 
// Array,Object,function
/*

JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

*/
const id = Symbol(1)
const nid =Symbol(1)
console.log(nid);
console.log(id);
console.log(id==nid);

const heros =['raj','vasu','manohar','ad'];
let myobj ={
    name:'raj',
    age:28,
}

const myfunction = function() {
    console.log("hello world!");
    
}
//----------------------------------------------
//stack (primitive)-isme copy milti hai kiska jo tumne isme variable difind kr rkhe hoge , 



//ex
let Name = "rajkumar"
let anothername = Name
anothername = 'vasu'
console.log(Name);
console.log(anothername);

//heap(non-primitive)- isme milta hai refrence oreganal memorylocation ka 
let userone = {
    email:"user@gmail.com",
    upi:"users@123"
}
let usertwo = userone
usertwo.email= "raj@321"
console.log(userone.email);
console.log(usertwo.email);

gamename = 'ab/cde/fgh/ijk'

const newstring = gamename.substring(0,4)
console.log(newstring);
const newstring1 = gamename.slice(-8,2)
console.log(newstring1);

const url = "https://rajkumar%20kjnfkdn"
newchnge = url.replace('%20','_')
console.log(newchnge);
console.log(url.includes('vasu'))
gamename = 'ab/cde/fgh/ijk'

console.log(gamename.split('/'));