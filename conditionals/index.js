"use strict";


//Switch case

/* let color ="red";

switch(color)
{
    case 'yellow':  
    console.log('color is yellow');
    break;

    case 'black':  
    console.log('color is black');
    break;

    case 'red':  
    console.log('red');
    break;
   
    default:
        console.log('No color here');
        break
        
    
} */
// Ternary operator

/* let num1 =10;
let num2 = 2;
let maxNum;

if(num1>num2)
{
    maxNum = num1;

}

else{
    maxNum = num2;
}

let max = num1>num2 ? num1 : num2;

//console.log(maxNum);
console.log(max);


 
let number;
 number = Number(prompt("Enter a number"));
/* 
  if(number % 3 === 0 && number % 5 === 0)
{
    console.log('FizzBuzz');   
    
}

else if(number % 3 === 0)
{
    console.log('Fizz');
    
}

else if(number % 5 === 0)
{
    console.log('Buzz');
    
}

else{
    console.log('Nothing');
    
} */

/* console.log(number % 3 === 0 && number % 5 === 0 ? "FizzBuzz":
            number % 3 === 0? "Fizz": 
            number % 5 === 0? "Buzz":
            "nothing"); */

console.log(`Online Grading System
-------------------------------------------------`);

let score;
score = Number(prompt("Enter your score"));
        if(score>=80 && score<=100) console.log('A+');
        else if(score>=70 && score<=79) console.log('A');
        else if(score>=60 && score<=69) console.log('A-');
        else if(score>=50 && score<=59) console.log('B');
        else if(score>=40 && score<=49) console.log('C');
        else if(score>=33 && score<=39) console.log('D');
        else if(score>= 0 && score<=32) console.log('F');
        else  console.log('invalid marks');
        
        
    

