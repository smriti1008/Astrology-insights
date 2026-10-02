const inputA = document.getElementById("InputA");
const inputB = document.getElementById("InputB");
const swapBtn = document.getElementById("swapBtn");

swapBtn.addEventListener("click", function(){
    let temp = inputA.value;
    inputA.value = inputB.value;
    inputB.value = temp;
})