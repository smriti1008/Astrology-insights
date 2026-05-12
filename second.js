// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "hellowwww guyzzz";
// }


// const element = document.getElementById("first")
// element.onclick = function handleClick(){
//     element.textContent = "hellowww guyz";
// }

// element.addEventListener('click',()=>{
//     element.textContent = "hellow guyz";
// })


// element.addEventListener('click',()=>{
//     element.style.backgroundColor = "pink";
// })


// element.addEventListener('dblclick',()=>{
//     element.textContent = "hellow guyz";
// })


// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I  am clicked";
// })


// const parent = document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am clicked";
//     })
// }


const grandparent= document.getElementById("grandparent")
grandparent.addEventListener('click',(e)=>{
    console.log(e.target);  //bas ek hi jagah event listener lagana pada means only on outer div
    // e.stopPropagation();
    console.log("grandparent is clicked");
},true)

// const parent= document.getElementById("parent")
// grandparent.addEventListener('click',()=>{
//     console.log("parent is clicked");
// },false)

// const child= document.getElementById("child")
// grandparent.addEventListener('click',()=>{
//     console.log("child is clicked");
// },true) 