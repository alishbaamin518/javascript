var num = 7 // 8 , 9
var num1 = 9  //      10              11
               //8     10       9      10 =37
var result = ++num + ++num1 + ++num + num1++
console.log(result)
var num = 4  // 5,6 ,7,8
var num1 = 55// 56, 57 ,
            // 5 -   56  +   6    +   56  +  6     -  7  +  8  =18
var result = ++num - ++num1 + ++num + num1++ + num++ - num++ + num++
console.log(result)
var num = 6 //7,8
var num1 = 2//2,3,4,5
//     6     + 7   +  7    + 2     + 3  +   4 +     +4 - 5 + 8 =36
var result = num++ + num + num++ + num1 + ++num1 + ++num1 + num1++ 
- num1 + num
console.log(result)