"use strict";

// Regular Expressions

/* const regExp = /solomon/;

console.log(regExp.test("I am solomon"));

const regExp2 = /solomon/gi;// i modifier, is not case sensitive, g is global

console.log(regExp2.test("I am Solomon")); */

const regExp = /solomon/gi;

 console.log(regExp);
console.log(regExp.source);
console.log(regExp.exec("Hi hello solomon")); 

console.log('----------------------------');


const str = "Hi My Name Is Solomon Solomon Solomon";
console.log(str.match(regExp));
console.log(str.search(regExp));
console.log(str.replace(regExp,"Yaw"));
console.log(str.source);









