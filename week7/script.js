const box = document.getElementById("infoBox")
box.textContent = "Hello from JavaScript (Week 7)!"
box.style.backgroundColor = "lightblue"
box.style.padding = "10px"
box.style.borderRadius = "10px"

const newPara = document.createElement("p")
newPara.textContent = "This paragraph was created by JavaScript!"
newPara.setAttribute("class", "dynamic-text")
box.appendChild(newPara)

console.log(newPara.getAttribute("class"))
