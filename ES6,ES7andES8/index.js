"use strict";

//Es6 Array and Object Destructuring

/* function greeting(user){
  const {name,age,address} = user;
  const {long,lat}= address; 
  console.log(`Hello ${name} and your age is ${age} form cordinate ${long},${lat}`);
  
}

const user = {
  name: "Solomon",
  age : 34,

  address: {
    long: 3.45,
    lat: 35.6
  }
};

greeting(user);

let numbers = [1,3,4,5,6,5];

let [a,b,c,...d] = numbers;
console.log(d); */



//Es6 Data Structure Set

/* let set = new Set();
set.add(100);
set.add(200);
set.add(300);
set.add(100);

console.log(set);

set.delete(200);

console.log(set);

for(let el of set)
{
  console.log(el);
  
} */


//Es6 Data Structure Map

/* let twiTrans = new Map();

twiTrans.set("Mango","Ame");
twiTrans.set("Banana","kola");
twiTrans.set("score",100);

console.log(twiTrans);

for(let index of twiTrans)
{
  console.log(index);
  
}
console.log(twiTrans.has("Mango"));
console.log(twiTrans.values());
console.log(twiTrans.keys());
twiTrans.clear();
console.log(twiTrans);
 */


//Es6 Data Structure Weak Set and Map

/* const obj1 ={
  name : "Solomon",
  age: 34
}

const obj2 ={
  name : "Yaw",
  age: 36
}
let ws = new WeakSet();
ws.add(obj1);
ws.add(obj2);
console.log(ws);
console.log(ws.has(obj1));

let wm = new WeakMap();
wm.set(o) */

const obj1 ={
  name : "Solomon",
  age: 34
}

const obj2 ={
  name : "Yaw",
  age: 36
}

let wm = new WeakMap();
wm.set(obj1,"yooo")
console.log(wm);
console.log(wm.get(obj1));



// Es6 Module

import addNumber from "./main.js";
console.log(addNumber(10,30));

// padStart and PadEnd , trimStart and trimEnd

let hour = "8";
let minute="4";

console.log(minute.padStart(3,0));
console.log( hour.padEnd(3,0));

// trimStart and trimEnd

let trimName = "   Solomon   ";

trimName.trimStart("   ");

console.log(trimName.length);
 
trimName= trimName.trimStart();
console.log(trimName);

trimName= trimName.trimEnd();
console.log(trimName.length );











