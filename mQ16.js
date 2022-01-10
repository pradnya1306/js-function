function perfect_num(num){
    sum=0
    for (var i=1;i<num;i++){
        if (num%i==0){
            sum=sum+i
        }
    }
if (sum==num){
console.log("it is perfect number")
}
else{
    console.log("it is not perfect number")
}
}
var num1=require("readline-sync")
var num=num1.questionInt("enter the number")
perfect_num(num)