//1
let height = prompt('Enter height','')
let base = prompt('Enter base',' ')
let area = height*base/2
console.log('The area of the triangle is \n'+ area)

//2

let sideA = prompt('Enter Side A','')
let sideB  = prompt ('Enter Side B','')
let sideC = prompt ('Enter Side C','')
var x = parseInt(sideA)
var y = parseInt(sideB)
var z = parseInt(sideC)
let perimeter= x + y + z
console.log('The perimeter of the triangle is '+ perimeter) 

//3

let length = parseInt(prompt('Enter lenght', '')) 
let width= parseInt(prompt('Ender width','')) 
let area2=length*width
let perimeter2=2*(length+width)
console.log('perimeter ' + perimeter2 + 'area ' + area2)

//4

let radius = parseInt(prompt('Enter radius',''))
const pi=3.14
let area3 = pi*radius*radius
let circumference = 2*pi*radius
console.log('circumference' + circumference )

//9
let hours = parseInt(prompt('Enter hours ' , ''))
let rate = parseInt(prompt('enter rate',''))
 console.log('Your weekly earning is '+ hours*rate)

 //10
 let names='Songul'.length

 names> 7
  ? console.log('your name is long') 
  : console.log('Your name is short')

  //11
  let firstName2 = 'Songul'.length
  let lastName2 = 'Bayer'.length

  firstName>lastName 
  ? console.log('your firstname is Songul longer than your lastname Bayer ' )
  : console.log('your lastname is Bayer longer than your firstname songul ' )

  //12
let myAge = 250
let yourAge = 25
let yas=myAge-yourAge
console.log('I am ' + yas + ' years older than you.')

//13

let age2=prompt('Enter your age','')
let hesap = 18-age2
age2>18 
? console.log(`You are ${age2} . You are old enough to drive`)
: console.log(`You are ${age2} ,'You will be allowed to drive after ${hesap}  years.`)
