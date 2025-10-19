// 1. เข้าถึง parent element (ul)
const fruitList = document.getElementById("fruit")

// 2. หาตัวอ้างอิง (reference node) ที่มีข้อความว่า "Banana"
let refNode = null
Array.from(fruitList.children).forEach((item) => {
  if (item.textContent.trim() === "Banana") refNode = item
})

// 3. สร้าง element ใหม่ <li>Mango</li>
const newFruit = document.createElement("li")
newFruit.textContent = "Mango"

// 4. แทรก <li>Mango</li> ก่อน <li>Banana</li>
fruitList.insertBefore(newFruit, refNode)
