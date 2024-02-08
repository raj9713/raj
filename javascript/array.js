const myarr =[1,2,3,4,5,6,7,8,9]

 const newarray = myarr.join()

console.log ( typeof myarr);
console.log(typeof newarray);
//slice ,splice

console.log("A " , myarr);
const nw1 = myarr.slice(1, 3)
console.log(nw1);

console.log("B ", myarr);
const nw2 = myarr.splice(1, 3)
console.log(myarr);
console.log(nw2);

const stringarray = ["raj","vasu","ad","jvs"]
const stringarray1 =["a","b","c","d"]
// stringarray.push(stringarray1)
// console.log(stringarray);

// const raj =stringarray.concat(stringarray1)
// console.log(raj); 
 
const raj1 =[...stringarray , ...stringarray1]


console.log(raj1);