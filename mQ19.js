function multiplesOfNumbers(limit){
    for (i=0;i<=limit;i++){
        if ((i%3==0)||(i%5==0)){
            console.log(i)
        }
    }
}
var k=require("readline-sync")
var limit=k.questionInt("enter the limit")
multiplesOfNumbers(limit)