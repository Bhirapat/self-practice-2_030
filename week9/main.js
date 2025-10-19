// เข้าถึง element ต่าง ๆ
const input = document.getElementById("messageInput")
const button = document.getElementById("sendBtn")
const display = document.getElementById("display")

// ฟัง event เมื่อคลิกปุ่ม
button.addEventListener("click", (event) => {
  const text = input.value.trim()  // ตัดช่องว่างออกก่อนตรวจสอบ

  if (text.length === 0) {
    alert("กรุณาพิมพ์ข้อความก่อนกดส่ง!")
    return
  }

  const p = document.createElement("p") // สร้าง <p> ใหม่
  p.textContent = text                  // ใส่ข้อความที่พิมพ์
  display.appendChild(p)                // เพิ่มลงใน div ด้านล่าง

  input.value = ""                      // ล้างช่อง input หลังส่ง
  input.focus()                         // ให้โฟกัสกลับมาที่ช่องพิมพ์
})
