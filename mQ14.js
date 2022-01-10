// [2, 6, 18, 10, 3, 75] and [2, 6, 18, 10, 3, 75]
function check_numbers(num1,num2){
    if((num1%2==0)&&(num2%2==0)){
        console.log("both are even")
    }
    else{
        console.log("both are not even")
    }
}

function check_num_list(list1,list2){
    for (var i=0;i<list1.length;i++)
      check_numbers(list1[i],list2[i])
}
check_num_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87] )