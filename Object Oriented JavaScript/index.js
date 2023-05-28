"use strict";
/* function user (name,age){
 const userObj ={
    name,
    age,
    walk: function(){
        console.log(this.name+" started walking");
        
    }
} 
return userObj;

 }


//Factory functions
const user1 = user("Solomon",34);


const user2 =user("Yaw",36);

console.log(user1,user2);
 */

//Constructor Functions

/* function User(name,age){
    this.name = name;
    this.age = age;

    this.walk = function(){
        console.log('My name is Solomon');
        
    }

}

const user1 = new User("Solomon",20);

console.log(user1   ); */


//Create an object using factory and constructor functions

const homeAddress1 = {
    street : "A",
    city: "B",
    zipcode:"C"
}

function homeAddress(street,city,zipcode){

    const obj = {
        street,
        city,
        zipcode,
    }

    return obj;


}

const homeAddress2 = homeAddress("B","C","D");
const homeAddress3 = homeAddress("E","F","G");

console.log(homeAddress2);
console.log(homeAddress3);

function HomeAddressConstr(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;

}

const homeAddress4 = new HomeAddressConstr("F","G","E");
console.log(homeAddress4);


