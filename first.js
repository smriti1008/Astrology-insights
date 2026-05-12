

const newElement = document.createElement("h2");
newElement.textContent= "Smritiiiie";
newElement.id = "second";




//select element

const element=document.getElementById("first");
element.after(newElement);

// element.before(newElement);


const newElement2 = document.createElement("h3");
newElement2.textContent="follow the page";
newElement2.id="third";
// newElement2.className = "Itii";
// //for two classnames
// newElement2.className += " Singh";

//other method

newElement2.classList.add("Itiii");
newElement2.classList.add("Singh");
newElement2.classList.add("Lucknow");

newElement2.style.backgroundColor = "pink";
newElement2.style.fontsize = "30px";
newElement2.style.color = " black";
newElement2.setAttribute("hello","hiii")

element.before(newElement2)
console.log(newElement2.getAttribute("hello"))


const list = document.createElement("li")
list.textContent = "hola";
const list2= document.createElement("li")
list2.textContent = "yoooo";
const list3 = document.createElement("li")
list3.textContent = "paneer";
const unorderElement = document.getElementById("listing");
unorderElement.append(list);
unorderElement.append(list2);
unorderElement.append(list3);
// unorderElement.prepend(list2);



console.log(unorderElement.children[1].after(list3));