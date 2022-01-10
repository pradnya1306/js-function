// / program to print the text
// declaring a function
// function greet(name) {
//     console.log("Hello " + name + ":)");
// }
// // variable name can be different
// let name1=require("readline-sync")
// let name = name1.question("Enter a name: ");
// // calling function
// greet(name);

// / program to add two numbers using a function
// declaring a function
// function add(a, b) {
//     console.log(a + b);
// }
// // calling functions
// add(3,4);
// add(2,9);


// let a = "hello";

// function greet () {
//     console.log(a);
// }
// console.log(a)
// greet(); 

// program to show the change in global variable
// let a = "hello";
// function greet() {
//     a = 3;
// }
// // before the function call
// console.log(a);
// //after the function call
// greet();
// console.log(a); // 3


// function greet() {
//      var a = "hello"
// }

// greet();

// console.log(a); // hello

// function saybuy(name){
//     console.log("buy",name)
// }
// var name2=require("readline-sync")
// var name1=name2.question("enter the name")
// saybuy(name1)

// function getResult(num1,num2,num3){
//     console.log(num1-num2+num3)
//     }
    
//     getResult(2,3,4,5);

// function SumOfNumbers(num1,num2){
//     return num1+num2;
//  }
//  var a =SumOfNumbers(1,2);
//  console.log(a)

// function averageOfSubjects(maths,science){
//     return ((maths+science)/2);
//  }
//  console.log(averageOfSubjects(25,30));

// function insertingElement(arr){
//     var a=5;
//     arr.push(a);
//     return arr;
//     console.log(arr);
  
//  }
//  console.log(insertingElement([1,2,3,4]));

// function multiplyString(string,num){
//     string*num;
//  }
  
//  console.log(multiplyString("kumar",2));

// var equal=function(num1,num2){
//     console.log(num1===num2)
    
// }
// equal(5,3)

// (function  () {
//     var x = "Hello!! Nayak";  // I will invoke myself
//     console.log(x);
//    })();
    
//    // Output :
//    // Hello!! Nayak

function myFunction(a, b) {
    return a * b;
   }
   
   var x = myFunction(4, 3);
console.log(x)