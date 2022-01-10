// If we have [50, 60, 10] and [10, 20, 13] 
function add_number(num1,num2){
    return num1+num2
}

function add_list_number(list1,list2){
    for (var i in list1){
        console.log(add_number(list1[i],list2[i]))
    }
}
add_list_number([50, 60, 10] ,[10, 20, 13] )