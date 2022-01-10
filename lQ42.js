// Q42. Find the sum of number digits in List.
// // 
// // List Integer Summation : [3, 13, 17, 7]
// // Explanation: 1+2 = 3, 6+7=13, 9+8=17, 3+4=7
// // The original list is : [15, 81, 11, 234]node

function digitsum(){
list=[12, 67, 98, 34]
newlist=[]
for (i of list){
a=String(i)
sum=0
for (j=0;j<a.length;j++){
    sum=sum+Number(a[j])
}
newlist.push(sum)
}
console.log(newlist)
}
digitsum()