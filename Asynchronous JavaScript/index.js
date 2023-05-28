"use strict";
// Asynchronous Programming


//Callback
/* console.log('Before');

function fetchUser(){

    setTimeout(function(){
        console.log('My name is Solomon');
        return {
            name:"Solomon",
            age:34,
        }
       },3000);
}

const user = fetchUser();

console.log(user);

console.log('After');

 */
//Callback Hell
/* 
fetchUser("1234",function(user){
    console.log(user);
    sendMail(user.email,function(response){
        console.log(response.sucess);
        
    });
    
})

function fetchUser(userId,callback){
    setTimeout(function(){
    console.log('My name is Solomon');
     const fetchUserObj ={
        id: userId,
        name:"Solomon",
        age: 34,
        email: "sadeklo@gmail.com", 
     }
     callback(fetchUserObj)

    }, 2000);
}

function sendMail(userEmail,callback){
    setTimeout(function(){
        console.log('message sending');
        
        const response ={sucess:true};
        callback(response)
    },3000)
  
}

 */


/* //Promises 

const promise = new Promise(function(resolve,reject){
   setTimeout(function(){
    // resolve(1);
            reject(new Error("This is an error"));

   },3000);
});

console.log(promise);
promise.then(function(result){
    console.log(result);
    
}).catch(function(error){
console.log(error);

}) */

/* const promise1 = new Promise(function(resolve,reject){
 setTimeout(() => {
    resolve(1);
 }, 2000);
});

const promise2 = new Promise(function(resolve,reject){
    setTimeout(() => {
       reject(new Error("Some error"));
    }, 2000);
   });

 Promise.all([promise1,promise2]).then(function(res){
console.log(res)
}).catch(function(error){
    console.log(error);;

 }); */

 //Fetch Web API

 /* const gitAPI = fetch("https://api.github.com/users/solomonyaw");
 gitAPI.then((res)=>res.json())
 .then((profile)=>console.log(profile))
 .catch((error)=> console.log(error));

 console.log(gitAPI);
  */

 async function getInfoFromGit(){
  const gitAPI = await fetch("https://api.github.com/users/solomonyaw");
  const profile = await gitAPI.json();
  console.log(profile);
  
  
 }

 

 getInfoFromGit();



