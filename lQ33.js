// Q33. Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi > 30 return "Obese"
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"

function calculateWeight(weight){
    if (weight<=18.5){
        console.log("Underweight")
    }
    else if (weight<=25){
        console.log("normal")
    }
    else if(weight<=30){
        console.log("Overweight")
    }
    else {
        console.log("Obese")
    }
}
var a=require("readline-sync")
var weight=a.questionInt("entre the weight")
calculateWeight(weight)
