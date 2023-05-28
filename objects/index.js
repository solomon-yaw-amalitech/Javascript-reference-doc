"use strict";

//Javascript Objects

/* const user = {
    name: "Solomon Adeklo",
    age : 34,
    isMarried: true

} */
/*   //Add 
user.email = "adeklosolomon@gmail.com";
user['phone'] = "0540834343";
//console.log(user);

//Update

user.isMarried = false;
user.age = user.age +5;

//console.log(user);


//Delete

delete user.age;
console.log(user); */


/* const user = {
    name: "Solomon Adeklo",
    age : 34,
    isMarried: true,
    friends : ["Charles","Stephen","Sketches"],
    selectColor: null,
    calcAge: function(){
    console.log('Your age is'+this.age);
    
        
    }
};

user.calcAge(); */


/* const user = {
    name: "Solomon Adeklo",
    age : 34,
    gender: "male",
    phone: "0540834343",
    email: "adeklosolomon@gmail.com"
}

for(let key in user)
{
    console.log(key, user[key]);
    
}

console.log(Object.keys(user));
console.log(Object.values(user));

for(let val of Object.values(user))
{
    console.log(val);
    
} */


//Exercise

let salaries = {
    Solomon: 2000,
    Patrick: 3000,
    Sketches: 4000,
    Emma: 5000,
    Charles: 6000,
}


let sum =0;

/* for(let keys in salaries)
{

    sum+= salaries[keys];
    console.log(keys,salaries[keys]);
    
} */

/* for(let values of Object.values(salaries))
{
    sum+= values;
}

console.log("Sum ="+sum); */


//Object Destructuring

/* Const user ={
    name :"Solomon",
    age : 34,
    favBook: {
        bookName: "Intro to Programming",
        author: "Rajid"
    }
} 

const{name,age,favBook} = user;
const {bookName, author} = favBook;
console.log(name);
console.log(age);
console.log(bookName);
 */

// Cloning an Object

/* const user ={
    name :"Solomon",
    age : 34,
}

const copiedUser = {};

copiedUser.name = user.name;
copiedUser.age = user.age;
console.log(copiedUser);

for(let key in user)
{
    console.log(key,user[key]);
    copiedUser[key] = user[key];
    
}
console.log(copiedUser);
 */


//JSON data format

const user ={
   name : "Solomon",
   age : 34,
};

const jsondata = JSON.stringify(user);

console.log(jsondata);
console.log(JSON.parse(jsondata));








































