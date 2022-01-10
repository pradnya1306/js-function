function average(num1,num2,num3){
    sum=num1+num2+num3
    console.log("sum=",sum)
    average=sum/2
    console.log( "average",average)
}
var number=require("readline-sync")
num1=number.questionInt("enter the number")
num2=number.questionInt("enter the number")
num3=number.questionInt("enter the number")
average(num1,num2,num3)