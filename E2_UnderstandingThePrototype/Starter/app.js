var person = {
  firstname: 'default',
  lastname: 'default',
  getfullname: function(){
    return this.firstname + this.lastname;
  }
}

var john = {
  firstname: 'john',
  lastnmae: 'doe'
}

// dont do this ever! for demo purpose only
//john inherits from person
john.__proto__ = person;
console.log(john.getfullname()); //prints john doe
console.log(john.firstname); //get john because of proto chain, looks at john obj first, but if it doesnt find, then moves on to the proto obj

//basically loop through john and prop will have access to that prop in john including on the prototypes
for(var prop in john) {
  //you can use hasOwnProperty to see if the prop is from the base obj (john) or ffrom the proto
  if(john.hasOwnProperty(prop)){
    console.log(prop + ':' + john[prop]);
  }
}

var jane ={
  address: '111',
  getFormalName: function(){
    return this.lastname+this.firstname;
  }
}

var jim = {
  getfirstnme: function(){
    return firstname;
  }
}

//combines all the props of the objects and adds them to john
_.extend(john, jane, jim);
