// Q40. Write a function For example, if we give 9119  the function should 
// return  811181, as the  square of 9 is 81 and square of 1  is 1.
function  squre(num){
   num1=String(num)
   str=""
   for (i of num1){
       str=str+(i*i)
   }
   console.log(str)
}
var num=9119
squre(num)