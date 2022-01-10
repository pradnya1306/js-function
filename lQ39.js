// Q39. Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
// #Examples:-

// maximun([4,6,2,1,9,63,-134,566]) returns 566
// minimun([-52, 56, 30, 29, -54, 0, -110]) returns -110
// maximun([5]) returns 5.

// minimun([42, 54, 65, 87, 0]) returns 0.
function max1(){
    var a=[4,6,2,1,9,63,-134,566]
    var a=[5]
    max=0
    for(i of a){
        if (i>max){
            max=i
        }
    }
    console.log(max)
}
max1()

function mini1(){
var a=[-52, 56, 30, 29, -54, 0, -110]
mini=a[0]
for (i of a){
    if(i<mini){
        mini=i
    }
}
console.log(mini)
}
mini1()
