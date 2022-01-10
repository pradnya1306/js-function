// Q30. Write a function that prints all the prime numbers between 0 
// and limit where limit is a parameter.
function prime(num){
    for (j=1;j<num;j++){
      count=0
      for (i=1;i<j;i++){
        if(num%i==0){
            count=count+1
        }

    }
    if (count==2){
        console.log(j,"it is prime number")
    }
    else{
        console.log(j,"it is not prime number")
    }
}
}
var a=require("readline-sync")
var num=a.questionInt("enter the limit")
prime(num)