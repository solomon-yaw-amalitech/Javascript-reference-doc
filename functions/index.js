"use strict";



/* function aboutMe(name,age){

    const message = `I am ${name} and I a ${age} years old`;
    console.log(message);
}

aboutMe("Daniel",67);

let sumOfNumbers = function (num1,num2){
        let sum = num1+num2;
        return sum;
}

let sum = sumOfNumbers(5,7);

console.log(sum);
 */

//Default Parameter

/* let sumOfNumbers = function (num1,num2=10){
    let sum = num1+num2;
    return sum;
}

let sum = sumOfNumbers(5);
console.log(sum); */


//Arrow function
/* const calcSum = (num1,num2) => num1+num2;

console.log(calcSum(10,10));

const multByTwo = (number) => number *2;

console.log(multByTwo(20)); */


//Rest Parameter
let mul =1;
function multiply (...arg){
  for(let num of arg)
  {
    mul*=num;
  }
    
    return mul;

}

console.log(multiply(2,3,4,5));





