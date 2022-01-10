function squeres_of_num(limit){
    dic={}
    for (i=1;i<=limit;i++){
        dic[i]=i*i
    }
    console.log(dic)
}
var num=require("readline-sync")
var limit=num.questionInt("entre the limit")
squeres_of_num(limit)