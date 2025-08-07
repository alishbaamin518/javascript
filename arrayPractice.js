//Array[] is a type of object
// array is collection of data
// multiple data ek hi mile wo hai array
// multiple data hai tou array's yani hum arrays likhain gai har jagha
var fruits=["apple","mango","banana"] //= ke baad ko value\element kehtain hai
console.log(fruits.length) // to check no of value
// ab position yani wo element kahan hai wo batayega
// lenght jo hai normally 1 se hi start kar ke baatai gi
// per INDEX jo  hai wo 0 se atrat leta hai
// index = 2 hai tou lenght = 3 hogi
console.log(fruits [1]) //array mai call hoga tou wo index hi hoga yeh SQAURE mai abhi call kiya hai
console.log(fruits [0])//Apple ab ZERO index per phela wala element
console.log(fruits [2])//banana
console.log(fruits [4]) // last index aagr na likha ho tou undefined
           // Yeh mutable hai Yani changeable
fruits[1]="orange" // change index  ab total mai apple orange banana hoga
fruits[4]="strawberry"// yeh huwa reassign yahan kuch tha nhi or element put kiya
// or yahan dekhain tou 3rd index ko chor diya is liye udher us jaagha EMPTY likha aya
//or length 5 likhi aigi kio ke empty cell count hoga
console.log(fruits)

          // ab arrays ke do method hotain hai
// 1- last se add or delete karna
// 2- start se add or delete karna
      // POP"Yani bahar anna" Delete LAST element of an arrays and return poped value
var veg=["potato","tomato","onion"]
//veg.pop() // isko kehtain hai fuction call //yeh likhtain hi last vale gayab
console.log(veg) 
    // jitna .pop()use karain gai last value delete hoti rahegi
 var r = veg.pop() // jahan bhi pop use kiya tou value delete hui
 // return ke liye ek var banaya usko veg se target kiya wih pop phir console kar ke dekho jo dekhna hai maine dono dekhe
 console.log(veg , r) // potato tomato or return onion 
console.log(r) // srf jo return huwa
// var arr =[]
// arr [0] =result
// arr [1] =result
// console.log(arr)
             // PUSH"andar dhaka dena" ADD LAST element of an arrays and return new arry length
var color =["blue","green","pink"]
color.push("yellow","purple")// pop khali tha kio ke udher se value hati per yahan add hai tou value likhain to wo add ho
console.log(color) //sab add hogaye sath
var check = color.push() // pop mai ease aalag se kiya tou wo kat raha tha is liye sath kar diya per isme leghth de diya "5"
console.log(color , check) // all names and lenght 5
        // SHIFT"Jaagha se hatna" Remove first element of an arrays and return it latest delete value
var word =["a","b","c","d"]
word.shift()
console.log(word); //  b c d
var rtn = word.shift() // c d
console.log(word, rtn) // return sirf b
        // unSHIFT"Jaagha pe aana" Add first element of an arrays start and return new arrays lenght
var vowels =["E","I","O","U"]
vowels.unshift("A")
console.log( vowels)
var rv =vowels.unshift()
console.log(vowels , rv)
 