const quotes =[
   " Dreams don’t work unless you do",
"Stay hungry, stay foolish",
"Small steps every day matter",
"Progress is better than perfection",
"Your only limit is your mind",
"Make yourself proud",
"Do it scared, but do it anyway",
"Consistency beats motivation",

];

const button= document.querySelector('button');
const quote = document.querySelector('h1')
button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*8);
    quote.textContent = quotes[index];

})