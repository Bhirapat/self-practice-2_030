// เข้าถึงกล่องหลัก
const box = document.getElementById('box')

// เข้าถึงปุ่มทั้งหมด
const buttons = document.querySelectorAll('button')

// วนลูปทุกปุ่มเพื่อเพิ่ม Event Listener
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.dataset.color // อ่านค่าจาก data-color ของปุ่มที่คลิก
    box.style.background = color       // เปลี่ยนสีพื้นหลังของกล่อง
    box.textContent = color.toUpperCase() // แสดงชื่อสี (ตัวใหญ่)
  })
})
