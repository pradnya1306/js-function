function isGreaterThan(num) {
    if (num>20){
        return true
    }
}


function count(list){
    count1=0
    for ( var i of list){
        if (isGreaterThan(i)==true){
        count1=count1+1
        }
    }
    return count1
}
var x=(count([21,12,45,23,11]))
console.log(x)