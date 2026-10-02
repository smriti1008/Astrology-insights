let count = 0;
const incbtn = document.getElementById("incbtn");
const decbtn = document.getElementById("decbtn");
incbtn.addEventListener("click", function(){
    count++;
    document.getElementById("count").innerText = count;
});
decbtn.addEventListener("click", function(){
    count--;
    document.getElementById("count").innerText = count;
});