function greet(whattosay){

  return function(name){
    console.log(whattosay + ' '+ name);
  };
};

var sayHi = greet('Hi');
sayHi('Tony');

//The output of the code above will still say Hi Tony
//When greet("Hi") is called, the whattosay variable is created in the new execution context
//once the return is executed, the greet() execution stack is removed, but the whattosay variable still persists because it is inside the greet function

greet('Hi')('Tony');
