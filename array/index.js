"use strict";

//Array

/* let friends = ["Solomon","Adeklo","Dordor","Yaw"];



friends.pop();
friends.shift();
console.log(friends);

friends.push("gandi");
friends.unshift("glen");
console.log(friends);

friends.splice(1,2);
console.log(friends); */

/* const numbers = [1,2,3,2,5,6,2,8];
console.log(numbers.lastIndexOf(2)); */
 
//Finding objects in array

/* let doctors = [{name:"Solo", age:34},
               {name:"Charles", age:20},
               {name:"Daniel", age:36},
              ];

              let result = doctors.find(function(doctors){
                return doctors.age >  30;
              });

              console.log(result);
               */


 // Iterating Array

 /* const numbers= [1,2,3,4,5];
 for(let i =0; i<numbers.length; i++)
 {
  console.log("index "+ i,numbers[i]);

  
  
 }
 console.log('----------------------');

 for(let index in numbers)
 {
  console.log("index "+index,numbers[index]);
  
 }

 for(let index of numbers)
 {
    console.log(index);
    
 }

 numbers.forEach(function(value,index){
  console.log(index,value);
  
 })
  */


 //sorting and reversing array

 //const numbers = [6,8,7,2,1,9];
 /* numbers.sort();
 console.log(numbers);

 numbers.reverse();
 console.log(numbers);

 let doctors = [{name:"Solo", age:34},
               {name:"Charles", age:20},
               {name:"Daniel", age:36},
              ];
 doctors.sort(function(d1,d2){
  if(d1.age>d2.age) return +1;
  if(d1.age===d2.age) return 0;
  if(d2.age>d1.age) return -1;
  
 }).reverse();

 console.log(doctors);
 
  */
/*  const numbers = [6,8,7,2,1,9];

const data = numbers.every(function(numb){
  return numb>0;
});

console.log(data); */

// concat and slice method

/* const num1 = [1,2,3];

const num2 =[3,4,5,6,7];

const num = num1.concat(num2);
console.log(num);

const numbers = [1,2,3,4,5,6,7,8,9];

const numberSlice = numbers.slice(3,5);
console.log(numberSlice);
  */

/* const numbers = [1,2,3,4,5,6,7,8];

console.log(...numbers);

const cloneNumbers = [...numbers];
console.log(cloneNumbers);

const num1 = [1,2,3];
const num2 = [3,4,5];

const num = [...num2,...num1];
num.sort();
console.log(num);
 */

//Joining array

/* const numbers =[1,2,3,4];

const joinArray = numbers.join(" ");
const message ="My name is Solomon";
const arrayMessage = message.split(" ");
console.log( arrayMessage);
console.log(arrayMessage.join("-")); */

//ES6 feature - mapping

//const numbers = [1,2,3,4,5];

/* const numMultByTwo =[];

for (let num of numbers)
{
  numMultByTwo.push(num*2);
}

console.log(numMultByTwo); */

/* const multBy2 = numbers.map(function(num){
  return num*2;
});

console.log(multBy2);

const doctors = [{name:"Solo", age:34},
               {name:"Charles", age:20},
               {name:"Daniel", age:36},
              ];

              const names = doctors.map((doctors)=> doctors.age);

              console.log(names);
              
 */

 //const numbers = [1,2,3,4,5];
/*const OddNumbers =[];
const evenNumbers =[];


for (let num of numbers)
{
  if(num % 2 ===1) OddNumbers.push(num);

  if(num % 2 ===0) evenNumbers.push(num);

}

console.log('Odd Numbers',OddNumbers);
console.log('Even Numbers',evenNumbers);

 */
/* const OddNumbers = numbers.filter((num)=> num % 2 == 1)
console.log(OddNumbers); */

const numbers =[10,20,30,7];
const sum = numbers.reduce(function(num,sum){
      return sum +num;
},0);

console.log(sum);




