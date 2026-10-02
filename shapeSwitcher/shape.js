const canvas =document.getElementById("canvas");

const trianglebtn = document.getElementById("trianglebtn");
const circlebtn = document.getElementById("circlebtn");
const squarebtn = document.getElementById("squarebtn");

trianglebtn.addEventListener("click", function(){
    canvas.innerHTML = " ";
    const triangle = document.createElement("div");
    triangle.classList.add("triangle");
    canvas.appendChild(triangle);
})

circlebtn.addEventListener("click", function(){
    canvas.innerHTML = " ";
    const circle = document.createElement("div");
    circle.classList.add("circle");
    canvas.appendChild(circle);
})

squarebtn.addEventListener("click", function(){
    canvas.innerHTML = " ";
    const square = document.createElement("div");
    square.classList.add("square");
    canvas.appendChild(square);
})