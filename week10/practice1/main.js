//โจทที่อาจารให้มา
document.addEventListener("DOMContentLoaded", () => {
const background_color = document.getElementById("bgColor")
const saveBtn = document.getElementById("saveBtn")
const resetBtn = document.getElementById("resetBtn")
const fontcolor = document.getElementById("fontColor")

const storage = localStorage.getItem("bgColor")
const storage1 = localStorage.getItem("fontColor") 

if (storage) {
    document.body.style.backgroundColor = storage
    background_color.value = storage
} 
if (storage1) {
    document.body.style.color = storage1
    fontcolor.value = storage1
}
else {
    document.body.style.backgroundColor = "#000000"
    background_color.value = "#000000" 
    document.body.style.color = "#000000"
    fontcolor.value = "#000000" 
}
saveBtn.addEventListener("click", () => {
    const color = background_color.value
    localStorage.setItem("bgColor", color);
})
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("bgColor")
    document.body.style.color = "#000000"
    background_color.value = "#000000" 
})

saveBtn.addEventListener("click", () => {
    const color = fontcolor.value
    localStorage.setItem("fontColor", color);
})
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("fontColor")
    document.body.style.color = "#000000"
    fontcolor.value = "#000000"
})

})