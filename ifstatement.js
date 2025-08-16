//________________if statement_____________
// styntex 1-if 2-perenthsis(Condition) 3-curlybracket{blockofcode}
//{block of code}

if(a == a){
    console.log('match hogaya')
}
else{
    console.log('match nhi huwa')
}
if(a === "a"){
    console.log('match hogaya')
}
else{
    console.log('match nhi huwa')
}
//== (double isequal to){Equality operator}.. yani sirf value check karega data type nhi
// ===(triple isequal to){ strickly Equality operator}.. yeh sab check karega data type bhi
if(5 !==9){ // hnn nhi hai barabar is liye(yes)
    console.log("yes")
}else{
    console.log("no")
}
if(5 !==5){ // hnn hai na is liye(no)
    console.log("yes")
}else{
    console.log("no")
}
console.log(a !==a)
console.log(8 !==20)
console.log(5 <= 5)
console.log("alishba" !=="alishba")
console.log(1 !=="1")
//_______________Multiple conditions
// var num = +prompt("entre your age")
if (num >= 18) {
    console.log("you allow to watch movies")
} else if (num >= 10) {
    console.log("you allow to play video games")
} else if (num >= 5) {
    console.log("allow to read a book")
} else {
    console.log("you are under age to use this website")
}