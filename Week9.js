//ทวน week 8 ช่วงท้าย
const yourName = prompt("What is oyur name ?","typing your name ...")
console.log(yourName)

if(yourName?.trim().length!==0 && yourName?.trim()!==null)
{
nameconfirm =confirm(`Are you ${yourName}`)
}
nameconfirm ? alert(`Hello, ${yourName}`)
: alert ('Hello, Guest')

const submitButton=document.querySelector("button")
submitButton.addEventListener
('click', (event)=>{
    console.log(event.target.id)
    console.log(event.target.nodeName)
    console.log(event.target.nodeType)
    console.log(event.target.nodeValue)
    console.log(event.target.parentElement)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
    console.log("Click button was clicked !")

})
const divElement = document.querySelector("div")
divElement.addEventListener("click",() => {
    console.log("Div was clicked !")
},
)

('click', ()=>{
    console.log("Click button was clicked !")
})

const bodyElement = document.body
body.divElement.addEventListener("click", (event)=>{
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
})

const inputMessage = document.querySelector('#keyInput')
const display = document.querySelector('#keyLog')

inputMessage.addEventListener('keydown', (event) => {
  const p = document.createElement('p')
  p.textContent = `You pressed: ${event.key}`

  if (event.key === 'Enter') {
    p.style.color = 'blue'
  }

  display.appendChild(p)
})


