let isRainig=true
let result=prompt('What is your Age ? ','')

if(result>18){
console.log('You are old enough to drive.')
}else{
console.log(` You are left with ${18-result} years to drive.`)
}

let age = prompt('What is your age','')
let myAge=22

if (age>myAge) {
    console.log(`You are ${age-myAge} years older than me.`)
} else if(age=myAge){
    console.log(`We are the same age`)
}