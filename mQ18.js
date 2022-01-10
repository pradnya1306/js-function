function show_numbers(limit){
    for (var i=0;i<=limit;i++){
        if (i%2==0){
            console.log(i,"even number")
        }
        else{
            console.log(i,"odd number")
        }
    }
}
var k=require("readline-sync")
var limit1=k.questionInt("enetr the limit")
show_numbers(limit1)