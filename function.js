// function greeting()
// {
//     console.log("hello");
//     return 1;
// }
// function addNumber(num1,num2)
// {
//     const sum = num1 + num2;
//     console.log(sum);
// }
// greeting();
// addNumber(2,7);

// console.log(greeting());  //undefined


//second method

//FUNCTION:EXPRESSION

// const addNumber = function(num1,num2)
// {
// return num1 + num2;
// }
// console.log(addNumber(4,5));


//arrow function

// const addNumber = ()=>{
//     console.log("hello");
// }

// addNumber();

// const addNumber = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(addNumber(3,4));

// const greeting =()=> {
//     let user = {
//         name:"Smriti",
//         age:20,
//     }
//     return user;
// }

// console.log(greeting());

// const greeting =()=> {
//     return {
//         name:"Smriti",
//         age:20,
//     }
// }

// console.log(greeting());

// const greeting =()=> {name:"Smriti", age:20,}

// console.log(greeting());

//after curly braces arrow function is treeted as normal function so we are 
//expected to write the return statement

//correct way

// const greeting =()=> ({name:"Smriti", age:20});

// console.log(greeting());


// //IIFE
// (function greeting(){
//     console.log("hello");
// })();

// (() =>{
//     console.log("hii");
// })();


//CALLBACK FUNCTION

// function greet(){
//     console.log("hello")
// }     
// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
// }
// meet(greet);
// function dance(){
//     console.log("I am dancing");
// }
// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);





//real life example

//if blinkit is merged

// function blinkitOrderPlaced(){
//     console.log("we have strated packing your food");
// }

// function zomatoOrderPlaced(){
//     console.log("we have strated preparing your food");
// }

// function payment(amount,callback){
//     console.log(`${amount} payment has initialized`)
//     console.log("Payment is received");
//     callback();
// }

// payment(500,zomatoOrderPlaced);
// payment(300,blinkitOrderPlaced);


//scope and closure

// let a = 10;
// const b=20;
// if(true){
//     console.log(b);
// }
// function greet(){
//     // let c=30;
//     console.log(a);
// }
// greet();

// let global=30;
// function scope()
// {
//     let global=40;
//     function newscope()
//     {
//         console.log(global);
//     }
//     newscope()
// }
// scope();

//CLOSURE

// function createCounter()
// {
//     let count=0;
//     return function increment(){
//         count++;
//         return count;    
         // console.log("I am increment function");
//     }
// }
// console.log(count);
// console.log
// const counter=createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


//usecase of closure
// let balance=500;
// let user={
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         // console.log(this);
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         // console.log(this);
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function()
//     {
//         return balance;
//     }
    
// }
// user.balance="smriti";        //the balance function is accessible to the outer access to which is unsafe for data storage

// console.log(user.deposit(200));
// console.log(user.getBalance());   still we can directly access balance

// method access kr paye par balance ko na kare







//filter



// const arr = [10,20,30,9,45,17,51,78];

// // const newArr = arr.filter((number)=> number>25)

// const compare = (number)=> number>25;
// compare(20);

// Array.prototype.filtering = function(compare){
    
//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
//     }

// const newArr = arr.filtering((num)=> num>25);

// console.log(newArr);

// const a = [10,20,30,40,50,60]
// const answer = a.filtering((num)=>num>25);
// console.log(answer);




const products =[
    {id: 1, name: "lapi", category: "electronics", price: 1500, inStock:true},
    {id: 2, name: "headphones", category: "electronics", price: 10, inStock:true},
    {id: 3, name: "smartphone", category: "electronics", price: 1000, inStock:false},
    {id: 4, name: "watch", category: "electronics", price: 500, inStock:true},
    {id: 5, name: "earbuds", category: "electronics", price: 700, inStock:true},
    {id: 6, name: "lead", category: "electronics", price: 20, inStock:true},
    {id: 7, name: "cover", category: "electronics", price: 40, inStock:true},
]


// const newProduct = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price);
// console.log(newProduct)

const ans = products.map((product,index,arr)=> ({name:product.name, price:product.price}))
console.log(ans)               // ye sab items par lagega


//chainingg

const newProduct = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price).map((product)=> ({name:product.name, price:product.price}));
console.log(newProduct)


const totalPrice=products.reduce((accumulator, currentValue)=>{
    if(currentValue.inStock)
        return accumulator+currentValue.price;
    else
        return accumulator;
},0);

console.log(totalPrice)




//SET    duplicate entry ko hatana

const arr=[10,20,30,10,50,10,20]
console.log(arr)

const s1 = new Set(arr);

s1.add(12)
s1.delete(50)
console.log(s1);

const email = ["se@gm","sa@gm", "se@gm", "so@gm"];

const uniqueEmail = [...new Set(email)];
console.log(uniqueEmail)



//map
const m1 = new Map([
    ["Smriti", 20],
    [2, "Smriti"],
    [true, 11],
    [[10,30,11], "Iti"]

]);


m1.set
console.log(m1)