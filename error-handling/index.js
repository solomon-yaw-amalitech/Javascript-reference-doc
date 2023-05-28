"use strict";

function div (a,b){
  if(b===0)
  {
    throw new SyntaxError("Second parameter cant be zero");
  }
  return a/b;
}



try{console.log(div(4,0));}
catch(e){
console.log(e);
console.log(e.name);
console.log(e.message);


}

finally{
  console.log('It works perfectly');
  
}

