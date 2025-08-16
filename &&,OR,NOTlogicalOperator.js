//_________________&& Operator_____________________
//sare true milna zaroori hai
// jab phela true milega tab aage barega 
// or phela hi false milega tou aage nhi barega
// &(and) matlab dono
if(3<5 && 5==5){ 
    console.log("true")
}else{     //true
    console.log("false")
} 
if(5==5 && 6<7 && 0 && "true" && false){
        console.log("yes")
}else{
    console.log("false") //false
}
if(5==5 && true && "true" && "sana" && 6 && 6<7){
    console.log("true") //true
}else{
    console.log("false")
}  
//_________________-OR|| OPERATOR__________
//isko true dhundhna hai ab phele mile ya akhir mai kahin bhi
// jaise hi true mile  operation khatam ab pheli hi true answer hoga
//sign of or ||
console.log(5<11 || 8%2==0) //true
console.log("alishba" || 1 || "anosha") // alishba