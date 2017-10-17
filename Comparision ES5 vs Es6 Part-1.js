// Default parameters in ES5 vs ES6 //

//ES5

/*
This is how we used to pass the values in ES5 if the value is zero then set the default value using || operator
e.g if name is having no value then put the name as Sam
    if age  is having no value then put the age as 23
    if id   is having no value then put the id as 372690
*/

var basicInfo  = function(name, age, id){
      var name  = name || 'Sam'
      var age = age || 23
      var id = id || 372690
}

//ES6

/*
Deafult value problem was sorted in ES6 by allowing the declaration part in the argument list itself 
Now there is no need to check the conditions directly assign the value.
e.g. name='Sam'
*/

var basicInfo = function(name='Sam', age=23, id=372690){
// your code goes here.
}



//Template literals in ES5 vs ES6//

//ES5

/*
 In ES5 we have to break the string like this while using the variables as output variables
 */

var name = 'My full name is' + firstName + ' ' + lastName + '.'
var id   = 'My Id is' + id

// ES6

/*
We can use the new syntax ${variableName} inside the BACK TICKED string
*/

var name = `My full name is ${firstName} ${lastName}.`
var id   = `My Id is ${id}`


//Multi-line Strings in ES5 vs ES6 

//ES5

/*
For multi line we needed to use '\n''\t' again and again 
*/

var basicInfo = 'My name is Sam \n\t'
                + 'My age is 23\n\t'
                + 'My id is 372690'

//ES6

/*
 We can achive mutiline using 
 */

var basicInfo = `My name is Sam,
                 My age is 23,
                 My id is 372690`

// Destructing Assignments ES5 vs ES6

//ES5

var myData = $('body').data(),//myData has properties laugh and cry
laugh = myData.laugh,
cry = myData.cry


//ES6

var {laugh, cry} = $('body').data();

var [col1, col2] = $('.column'), //With Arrays
    [line1, line2, line3] = file.split('\n');


// Enhanced Object literals ES5 vs ES6


//ES5
var basicInfo = {
 name : 'Sam',
 age : 23,
 id : 372690
},
address = function(){
    city: 'Minnepolis'
    return city;
}

var personalInfoEs5 = {
    name : basicInfo.name,
    age : basicInfo.age,
    address : address,
    toString : function(){
        return JSON.stringify(this.valueOf())
    }
}

//ES6
var basicInfo = {
 name : 'Sam',
 age : 23,
 id : 372690
},
address = function(){
    city: 'Minnepolis'
    return city;
}

var personalInfoEs6 = {
    _proto_:basicInfo,//We can set the prototype using _proto_`` not 'proto'
    address,
    toString(){
        return JSON.stringify((super.valueOf))//Directly using super. function to access the top level function.
    }
}


// Arrow functions in ES5 vs ES6

//ES5
var _this = this
$('.btn').click(function(event){
    _this.sendData();
})

this.string  = this.string.toUpperCase()
return function(){
    return console.log(_this.string)
}

var name = ['Sam', 'Ronny'];
var message = name.map(function(value){
    return 'name is'+ value
})

//ES6 without _this = this
$('.btn').click((event) =>{
    this.sendData()
})

this.string = this.string.toUpperCase()
return ()=> console.log(this.string)

var name = ['Sam', 'Ronny'];
var message = name.map((value) =>`name is ${value}`)



//Promises in ES5 vs ES6

//ES5

setTimeout(function(){
    console.log('Hello')
}, 1000)

setTimeout(function(){
  console.log('Yay!')
  setTimeout(function(){
    console.log('Wheeyee!')
  }, 1000)
}, 1000)

//ES6
var wait1000 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000)
}).then(function(){
    console.log('Hello')
})

//With Arrow function
var wait1000 = new Promise((resolve, reject) =>setTimeout(resolve, 1000)).then(() => console.log('Hello'))

var wait1000new = new Promise((resolve, reject) => setTimeout(resolve, 1000))

 wait1000new().then(()=>console.log('Yay'), wait1000new()).then(()=>console.log('Wheese'));


//Block-scoped constructs Let and Const in ES6


//ES5
function sayName(present){

 var presentKumar = "Ankit"

 if(present){
     var presentKumar = "Prashant"
 }    

 {
   var presentKumar = "Agru"
    {
        var presentKumar = "Shyam"
    }

 }

 return presentKumar;
}

sayName(true);

//Output = "Shyam" var is not having any such concept of block 


//ES6
function sayName(present){

 var present = "Ankit"//can mix let and Var

 if(present){
     let presentKumar = "Prashant"
 }    

 {
   let presentKumar = "Agru"
    {
        let presentKumar = "Shyam"
    }

 }

 return presentKumar;
}

sayName(true);

//Output = "Ankit" because let scope is restricted to block level only



//Classes in ES6
class personalInfo{
    constructor(hobby = []){
        this.name = 'Sam'
        this.age = 23
        this.id = 372690
        this.hobby = hobby
    }

    getFullBio(){
        console.log('Full bio is:${name}${age}${id}${hobby}')
    }
}

//Inheritance
class info extends personalInfo{
    constructor(hobby){
        //your code
    }
}

//Invoking super constructor
super(['playing','Jumping']);

let info = new personalInfo(['Jumping','Singing']);
info.getFullBio();


//Import Export ES5 vs ES6

//ES5 we use <script> </script> tags with IIFE or AMD
//module.js
module.exports ={
    port:3030,
    getAccounts : function(){
        //your code here
    }
}
//main.js
var service  = require('module.js')
console.log(service.port)//3030

//ES6 we used import and export to expose and get some class
//module.js
export var port =3030;
export function getAccounts(){
    //your code goes here
}
//main.js
import{port, getAccounts} from module
console.log(port)//3030