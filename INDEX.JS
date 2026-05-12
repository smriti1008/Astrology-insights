//variables
// let name="Smriti";
// let age="20";
// age = "21";
// console.log(name , age);

// const account =1234;
// account =4567;
// console.log(account);


// Let age="20";
// Let age="21";
// console.log(age);


// var a=10;
// var a=20;
// console.log(a);



// let a =10;
// let b=2.36;
// console.log(a,b);

// //string
// let c="smriti";
// let d="she is nice";
// console.log(c,d);

//boolean
// let login=true;
// let F=false;
// console.log(login,F);


// let user;
// console.log(user);


// //bigint
// let num=232163782617889028388n;
// console.log(num);


//symbol
const id1=Symbol("id");
const id2=Symbol("id");
console.log(id2==id1);
console.log(typeof id1);

// //non primitive data type
// //array
// let arr=[10,20,11,"smriti",true];
// console.log(arr);


// let user={
//     firstName:"Smriti",
//     lastName:"Singh",
//     age:20,
// };
// console.log(user);



// function add(){
//     console.log("Hello");
// }
// add();

//we can store a function in variable in js
// let s=function add(){
//     console.log("hello");
// }
// console.log(s());


//TYPE OF NUMBER
// let a =10;
// let b="smriti";
// console.log(typeof a, typeof b);

//null
// let weather=null;
// console.log(typeof weather);
//biggest of js it says type of null is object not null

//for all non primitive data types the type of of every data type is object

//operators
// let x=20;
// let y=20;
// x=x+y;  
// x+=y;
// console.log(x);
// console.log(x===y);
// type check (dono same type ke hone chahiye ===, uske baad wo camparison)


// let a="121ac";
// let b=Number(a);
// console.log(typeof b);


//number -> string

// let a=10;
// let b=String(a);
// console.log(typeof b);


// let a= false;
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined)); 


//boolean conversion

// console.log(Boolean(0));
// console.log(Boolean("Hello"));
// console.log(Boolean(""));
// console.log(Boolean(null));


// computer science challenge

let a="0.10";
let b="0.20";
let c=Number(a)+Number(b);
console.log(c);

//RULES
//null is loosely equal to undefined only
// console.log(null==undefined);    //true
// console.log(null===undefined);   //false

//>,<,>=,<= (null--> number, undefined--> NaN)



// console.log(10<true);
// console.log(null>="");

//LOOP KAISE KAAM KARTA HAI
//FOR LOOP


// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }

// for(let i=10;i>0;i--)
// {
//     console.log(i);
// }



//DO WHILE


// let i=0;
// do{
//     console.log(i);
//     i++;
// } 
// while(i<10);


// //IF ELSE

// let age =15;
// if(age>18)
// {
//     console.log("eligible");
// }
// else
// {
//     console.log("not eligible to vote");
// }


// //LOGICAL OPERATOR

// //&&, ||

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);


// console.log(true || true);
// console.log(true || false);
// console.log(false || false);



// let a="Rohit";
// let b="Mohit";
// let c=a&&b;
// console.log(c); //output comes mohit-->in boolean rohit will be treated as true 



