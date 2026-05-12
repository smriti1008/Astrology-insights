// function greeting(){
//     console.log("hello coder army");
// }
// greeting();


// function addNumber(n1, n2, n3=0, n4=0)
// {
//     const sum = n1+n2+n3+n4;
//     console.log(sum);
// }
// addNumber(3,4,2,1);

//rest operator/


// function addNumber(...num){
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     return sum;
// }
// let result = addNumber(5,10,15);
// console.log(result);

// console.log(addNumber(5,10,15));

//rest operator in array

// const arr=[10,20,30,40];
// const[first,second,third,...num]=arr;
// console.log(first,second,third,num);

//spread operator

// const arr=[10,20,30,40];
// const arr2=[60,70,80,90];
// const ans=[arr,arr2];
// console.log(ans);

//when  we use spread operator

// const ans2=[...arr,...arr2]
// console.log(ans2);

// const addNumber = function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(2,4));


// console.log(addNumber(2,4));
// const addNumber = function(num1,num2){
//     return num1+num2;
// }        reverse calling nahi hoti

//ARROW FUNCTION

// const addnumber =(n1,n2)=>n1+n2;
// console.log(addnumber(4,7));


// const greeting =()=>{
//     return{
//         name:"Smriti",
//         age:"20",
//     }
// }
// console.log(greeting());


// const greeting =()=> {name:"Smriti"}
// console.log(greeting());



// let arr=[10,11,19,7,50]
// arr.sort((a,b)=>a-b);
// console.log(arr);

//single parameter
// const squarenumber = num => num*num;
// console.log(squarenumber(2));

// var a=10;
// var b=20;
// function addnumber(num1,num2)
// {
//     var sum=num1+num2;
//     return sum;

// }
// var sumresult1=addnumber(a,b);
// var sumresult2=addnumber(4,5);
// console.log(sumresult1,sumresult2);


// function greet (){
//     console.log("hello")
// }
// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
//     console.log("I have finished the meeting");
// }


// function dance(){
//     console.log("I am dancing");
// }
// function done(callback){
//     console.log("hello");
//     callback();
//     console.log("Oh! also I just finished dancing");
// }
// done(dance);


