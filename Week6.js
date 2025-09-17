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
