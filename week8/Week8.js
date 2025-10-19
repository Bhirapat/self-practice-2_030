
const meatElement = document.querySelector('.meat')
console.log(meatElement)
//Output         <li class="meat">Chicken Wings</li>
//ถ้าอยากให้ output ออกมาหมด ให้ใช้ querySelectorAll
const meatAllElement = document.querySelectorAll('.meat')
meatAllElement.forEach((ele) => console.log(ele))
console.log(meatAllElement)

//2 หา meat element ที่มี text value มีคำว่า soup
const meatsoupElement = document.querySelectorAll(".meat")
meatsoupElement.forEach((ele) =>{
    if (ele.textContent.toLowerCase().includes("soup")) {
        console.log(ele)
    }
});

//3 go to the first child element node under ul id = "soup" and tranverse all sibling node

const firstSoupElement = document.querySelector("#soup").firstElementChild;
 
let sibling = firstSoupElement;
while (sibling) {
  console.log(sibling);
  sibling = sibling.nextElementSibling;
}

//หา first element of doc that has an ID values "appetizer" or "soup"
// คืน element ตัวแรกที่เจอ (#appetizer หรือ #soup)
const meatappetizer_soup_Element = document.querySelector('#appetizer, #soup');
console.log(meatappetizer_soup_Element);


//find all class "meat" element under <ul id="apptizer"> or <ul id="soup"> only
const meatAllElementunder_app_soup = document.querySelectorAll('#appetizer .meat ,#soup .meat')
meatAllElementunder_app_soup.forEach((ele) => console.log(ele))
console.log(meatAllElementunder_app_soup)


// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

// (insertBefore) 1. <li class="vegan">Cabbage Soup</li>
//1.1 get its parent
const soupUlElement = document.getElementById("soup")
//1.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim().includes("Beef Soup")) refNode = element
})
//1.3 create node <li class="vegan">Cabbage Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Cabbage Soup"
newNode.setAttribute("class", "vegan")
//1.4 insertBefore(newNode, refNode)
soupUlElement.insertBefore(newNode, refNode)

