//1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//3
console.log('10'==10)
//4
console.log(Math.round(parseFloat(9,8)+1)==10)
//5
let string1="python"
let string2="jargon"
console.log(string1.includes('on'),string2.includes('on'))
//6
let string3="I hope this course is not full of jargon."
console.log(string3.includes("jargon"))
//7
console.log(Math.random()*101)
//8
console.log((Math.random()*100)+50)
//9
// input from the user
const min = 0;
const max = 255;

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(a)
//10
let min2=0
let max2=9
let random=Math.floor(Math.random()*(max2-min2+1))+min2;
let str ='JavaScript'
console.log(str.charAt(random))
//11
console.log('1\t1\t1\t1\t1\n2\t2\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\n')
//12
let str2='You cannot end a sentence with because because because is a conjunction'
console.log(str2.replace('because because because',''))