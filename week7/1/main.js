// เข้าถึงกล่องหลัก
const box = document.getElementById('box')

// ปุ่ม “เพิ่มเส้นขอบ”
document.getElementById('add').addEventListener('click', () => {
  box.classList.add('bordered')
})

// ปุ่ม “ลบเส้นขอบ”
document.getElementById('remove').addEventListener('click', () => {
  box.classList.remove('bordered')
})

// ปุ่ม “สลับเส้นขอบ”
document.getElementById('toggle').addEventListener('click', () => {
  box.classList.toggle('bordered')
})
