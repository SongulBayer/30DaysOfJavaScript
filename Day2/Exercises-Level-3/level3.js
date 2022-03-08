//1
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern=/love/gi
console.log(string.match(pattern))
//2
let string2='You cannot end a sentence with because because because is a conjunction'
let pattern2=/because/gi
console.log(string2.match(pattern2))
//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let pattern3=/%/gi
let pattern4=/#/gi


//4
let earns=500
let annual = 1000
let courses=15000

console.log(earns+annual+courses)
