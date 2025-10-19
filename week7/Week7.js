console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)
console.log(document.getElementById("123"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null
console.log(htmlElement.parentNode) //root node
if (htmlElement.parentNode === document) {
  console.log("parent of html is a root node")
}

console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.firstChild.nextSibling)
//<!-- sample comment #1 -->
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
console.log(document.lastChild) //<!-- sample comment #3 -->
console.log(document.lastElementChild) //<html lang="en">

//1.get all child node under <div id = '123'>
const divElement = document.getElementById('123')
//2.get all node type children
const divChildNodes =divElement.childNodes //get all node type children (NodeList)
console.log(divChildNodes.length)
divChildNodes.forEach((child) => console.log(child))
//3. get only Element node type children 
const divChildren = divElement.childNodes
console.log(divChildNodes.length)
Array.from(divChildren).forEach((child) => console.log(child))

const divElement = document.getElementById('123')
//get all attributes on div id ='123'
const divAttrs = divChildNodes.Element.attributes
console.log(divAttrs.length)

for(let i =0; i < divAttrs.length; i++) {
    const attrName = divAttrs[i].Name
    const attrValue = divAttrs[i].value
    console.log('attribute name: ${attrName},')
}

//1.
console.log(document.firstChild.nodeType)
//2.
if (document.firstChild.nodeType===1) {
    console.log("Hello HTML node")
  } else {
    console.log("Hello any node")
}

let el = document.getElementById("demo");
 
const p1 = document.createElement("p");
p1.innerHTML = "<i>Sample Italic Text</i>";
p1.setAttribute("method", "innerHTML");
el.appendChild(p1);
 
const p2 = document.createElement("p");
p2.innerText = "<i>Sample Italic Text</i>";
p2.setAttribute("method", "innerText");
el.appendChild(p2);
 
const p3 = document.createElement("p");
p3.textContent = "<i>Sample Italic Text</i>";
p3.setAttribute("method", "textContent");
el.appendChild(p3);
 
const p = document.createElement("p");
p.setAttribute("format", "italic");
p.textContent = "Paragraph with format='italic' attribute";
el.appendChild(p);


