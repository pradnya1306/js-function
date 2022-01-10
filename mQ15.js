function vote_eligibal(age){
    if (age>=18){
        console.log("eligibal for vote")
    }
    else{
        console.log("not eligibal for vote")
    }
}
var age1=require("readline-sync")
var age=age1.questionInt("enter teh age")
vote_eligibal(age)
