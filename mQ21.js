function string_length(str1,str2){
    var str1len=str1.length
    var str2len=str2.length
    if (str1len>str2len){
        console.log(str1)
    }
    else if(str1len==str2len){
        console.log(str1,str2)
    }
    else{
        console.log(str2)
    }
}
var str=require("readline-sync")
var str1=str.question("enter the string")
var str2=str.question("enter the string 2")
string_length(str1,str2)
