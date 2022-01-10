// Q43.  Make a function given a list [‘a’, 1, ‘2’, 5, ‘b’, ‘q’]. 
// Print the last ‘N’ elements of the given list. ‘N’ is accepted from the user.
// Sample Input:
// 1
// Sample Output:
// q 
// Sample Input:
// 3
// Sample Output:
// 5
// b 
// q

function lastElement(last){
list =['a', 1, '2', 5, 'b', 'q']
index=list.length-last
for (var i=index;i<list.length;i++){
     console.log(list[i])
}
}
var a=require("readline-sync")
var last=a.questionInt("how many last element you want")
lastElement(last)