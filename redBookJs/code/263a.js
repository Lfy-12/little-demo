class SuperArray extends Array{}

let a1 = new SuperArray(1,2,3,4,5);
let a2 = a1.filter( x=>!!(x%2) );

console.log(a1);
console.log(a2);
console.log(a2 instanceof Array);
console.log(a2 instanceof SuperArray);