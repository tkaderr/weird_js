var person = {
  firstname: "John",
  lastname : "Doe",
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};


//this will throw an error becuase this refers to the global context and the global context does not have getFullName function when invoked
var logName = function(lang1, lang2){
  console.log('logged:' + this.getFullName());
}.bind(person);
//you can bind a function expression like this as well.

//all function names get bind, apply, call
//bind will take a copy of the function and then "this" will refer to what is inside the paranthesis
var logPersonName = logName.bind(person);


logPersonName();

//the call function basically calls the function but I can not only pass arguments but also define what the "this" can refer to in the paranthesis
logName.call(person, 'en', 'es');

//the apply function is the same as call but you need to wrap your arguments in an array
logName.apply(person, ['en', 'es']);


//function borrwing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}
//I am using person function get fullname and passed the "this" to refer to person2 object
person.getFullName.apply(person2);


//function currying (mainly used in mathematic purposes)
function multiply(a,b){
  return a*b;
}
//bind can also take parameters aside from what the "this" refers to. The argument is the first parameter of the multiply function, where 2 = a
var multiplyByTwo = multiply.bind(this, 2);
//when passing another parameter, this refers to the second parameter in the multiply function, b
multiplyByTwo(4);
