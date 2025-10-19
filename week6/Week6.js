// เขียน function ที่ greet เป็น format อื่นที่ไม่ซ้ำกับอาจารย์
// ใช้ higher order function จัด format เอาเข้าใจง่ายๆไม่ยากไปเผื่อโดนถาม

const greet = (name, formatter) => formatter(name)
const speak = Text => Text.toLowerCase() + '!!!'
const whisper = text => text.toLowerCase() + '...'

//pure function 


//Ex higher order Function
function a() {
    return sum
}

function b(){
    return sum(1,5)
}
function c(x){
    return x
}
function sum(num1,num2){
    return num1 + num2
}

console.log(typeof a())
console.log(typeof b())
console.log(typeof c(sum))

//
let a = 1 //global scope
function doSomething(x) {
  let a = 10 //local scope
  let greet = "Hello"
  function echo() {
    let a = 555
    let b = "Bob"
    console.log(a, b)
  }
  return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a = 100
console.log(`a= ${a}`)
console.log(doSomething(echo()))

//



function doSomething(x) {
  function echo() {
    return `hello, ${x}`
  }
  return echo
}

console.log(doSomething("guest")()) //console.log(echo()) เรียก echo ซ้อนกัน 

//Closure : 
function counter() {
  let count = 0
  function increment() {
    return ++count
  }
  function decrement() {
    return --count
  }
  function getCount() {
    return count
  }
  return {
    add: increment,
    decrese: decrement,
    getCountValue: getCount,
  }
}
const { add, getCountValue } = counter()
console.log(add())
console.log(getCountValue())
// const c = counter()
// console.log(c.increment()) //1
// console.log(c.increment()) //2
// console.log(c.decrement()) //1
// console.log(c.getCount()) //1

//Excercise
function idGenerator(){
let count = 0
return function (){
    count ++
    return count
}
}
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())



//เสริม ข้อที่ทำเอง ผ่าน HOF ย้อนหลัง

// ฟังก์ชันหลัก (Higher-Order Function)
function greetUser(name, formatter) {
  const message = `Hello, ${name}!`
  return formatter(message) // เรียกใช้ฟังก์ชัน formatter ที่ส่งเข้ามา
}

// 1. แปลงข้อความให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
const toUpper = (text) => text.toUpperCase()

// 2. แปลงข้อความให้เป็นตัวพิมพ์เล็กทั้งหมด
const toLower = (text) => text.toLowerCase()

// 3. กลับข้อความจากหลังมาหน้า
const reverseText = (text) => text.split('').reverse().join('')

// 4. ใส่อีโมจิข้างหน้าและข้างหลัง (format ใหม่ไม่ซ้ำอาจารย์)
const emojiFormat = (text) => `${text} `