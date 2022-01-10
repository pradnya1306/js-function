function license_checker(speed){
    if (speed<70){
        console.log("ok")
    }
    else if(speed>70){
        point=(speed-70)/5
        if (point<12){
            console.log("points = ",point)
        }
        else{
            console.log("lisecse suspended")
        }
    }
}
var a=require("readline-sync")
var speed=a.questionInt("enter the speed")
license_checker(speed)