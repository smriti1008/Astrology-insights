//Array

// let marks = [100, 50, 70, 80, 90];
// console.log(marks);
// console.log(marks.length);


// let arr = [100, 30, "smriti", true];
// console.log(arr);
// console.log(arr.toString());
// console.log(arr[3]);

// console.log(typeof arr);

// arr[1] = "Anish";
// console.log(arr);


// arr.push("Buggi");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// arr.shift();
// console.log(arr);   // not recommended to use cuz due to one element we need to change so many elements shifting 
// so the system gets disturbed;(for shift n=and unshift)



// let arr = [10, 30, 50, 70, 80];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }


// for(let num of arr)
// {
//     console.log(num);
// }


// let ans = [2,4,4,6,6,];
// ans= [1,2,3,4,5];
// console.log(ans);



// // const = [2,4,6,8,9];
// // itr[1,2,3,4,5];
// // console.log(itr);


// console.log(ans.slice(2,4));
// console.log(ans.splice(1,3));



//spread operator

// const arr = [10,20,30,50,60];
// const arr2 = ["Smriti",11,true];
// const arr4 = [2,4,6];
// arr.push(arr2);
// console.log(arr);

// but we don't want to push array in array but the elements

// const arr3 = arr.concat(arr2,arr4);
// const arr3 = [arr,arr2,arr4];  isme bhi array ke andar array aa raha

// now we will use spread operator;

// const arr3 = [...arr,...arr2,...arr4];
//spread operator individually breaks tha array elements

// console.log(arr3);



//ARRAY TO STRING CONVERSION

// const names = ["Alice","Bob","Charlie","Bob","alice"];
// console.log(names.toString());

//join operator

// console.log(names.join("-"));
// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bob"));


// names.sort();
// names.reverse();
// console.log(names);


// const arr = [10,30,50,[40,90,[60,19,99],11],80];
// const a = arr.flat(Infinity);
// console.log(a);
// console.log(arr[3][2][1]);




//OBJECT

// const user = {
//     name:"smriti",
//     "age":20,

// }
// console.log(user["name"]); // where this is used basically if we want to add home address this will give erroe
//so we will write "home address"
// console.log(typeof user);

// user.aadhar=1234;
// user.age=21;
// delete user.age;
// console.log(user);



// const user = {
//     name:"smriti",
//     "age":20,

// }
// const user2 = user;
// user2.age =19;
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// for(let keys in user)
// {
//     console.log(keys, user[keys]); // if we write user.keys the output will be undefined
// }

// const name = user.name;
// const age = user.age;  not most efficient property


//object destructuring
// const{name,age} = user;

// console.log(name,age);

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }
// for(let values of Object.values(user)){
//     console.log(values);
// }
// for(let values of Object.entries(user)){
//     console.log(values);
// }
// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);
// }


// const strike = {
//     name : "smriti",
//     greeting: function(){
//         console.log(`strike is coming ${strike.name}`);
//         return 20;
//     }
// }
// strike.greeting();
// const re = strike.greeting();
// console.log(re);

//how to create a symbol

const sym = Symbol("id");


const user = {
    name : "smriti",
    age :20,
    [sym]:"hello",
    address: {
        city:"lucknow",
        state:"up",
    }
}
console.log(user);

// const user2 = {...user};
// user2.name = "itii";
//imppppp
// user2.address.city = "varanasi";
// console.log(user2);
// console.log(user.address.city);
// console.log(user2.address.city);


const user2 = structuredClone(user);
user2.address.city = "varanasi";
console.log(user);
console.log(user2.address.city);
console.log(user.address.city);