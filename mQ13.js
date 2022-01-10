function check_numbers(num1,num2){
    if((num1%2==0)&&(num2%2==0)){
        console.log("both are even")
    }
    else{
        console.log("both are not enen")
    }
}
var num=require("readline-sync")
var num1=num.questionInt("entre the number")
var num2=num.questionInt("entre the number")
check_numbers(num1,num2)