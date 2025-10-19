// ให้ chat GPT สร้างโจทให้
// ให้เขียน JavaScript เพื่อให้หน้าเว็บนี้ทำงานดังนี้
// เมื่อคลิกปุ่ม “Add Task” ให้อ่านค่าจากช่อง input
// แล้วสร้าง <li> เพิ่มใน <ul> ด้านล่าง
// ถ้า input ว่างให้ alert ว่า “Please enter a task.”
// เมื่อคลิกที่รายการ <li> ใด ๆ ให้เปลี่ยนสีพื้นหลังของ <li> นั้นเป็นสีเขียว (แปลว่าทำเสร็จแล้ว)
// เมื่อคลิกปุ่ม “Toggle Theme” ให้สลับธีมระหว่าง light และ dark mode
// background และสีตัวอักษรต้องเปลี่ยนตาม

const addtask = document.getElementById("addBtn")
const toggle = document.getElementById("themeBtn")
const inputtext = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

document.addEventListener("DOMContentLoaded", () =>{
    addtask.addEventListener("click", () => {
        const text = inputtext.value.trim();
        if (text === "") {
            return alert ("Please enter a task.");
        }

        const li = document.createElement("li")
        li.textContent = text

        li.addEventListener("click", () => {
            li.style.backgroundColor = "green"
        })
        taskList.appendChild(li);
        inputtext.value = "";
    })
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode")
    })
})