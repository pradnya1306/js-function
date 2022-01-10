// Q41. Write a Python program to find the list with maximum and minimum length.
// List with maximum length of lists:
// (3, [13, 15, 17])
// List with minimum length of lists:
// (1, [0])

function max_min(){
    original=[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
    max=0
    var i;
    min=original[0].length
    for ( i of original){
        len=i.length
        if (len>max){
            max=len
            var h=i
        }
        if (len<min){
            min=len
            var k=i
        }
        
    }
    console.log("max",max)
    console.log(h)
    console.log("min",min)
    console.log(k)
}
max_min()