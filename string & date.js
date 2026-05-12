//string

// const str1 = "Smriti";
// console.log(str1);
// const str2 = `Smriti
// is a good girl`;
// console.log(str2);
// const age=20;
// const str3 = `Smriti is ${age}`;
// console.log(str3);


// const str = `hello guys`;

// console.log(str.length);
// console.log(str[7]);
// str[2] = "S";//             no changee
// console.log(str);

// console.log(str.toUpperCase());

// const str2 = `hello guys guys`;
// console.log(str2.indexOf(`guy`));
// console.log(str2.indexOf(`cer`));
// //if guy is present to times which index will be printed

// console.log(str2.indexOf(`guy`));
// console.log(str2.lastIndexOf(`guy`));
// console.log(str2.includes('ell'))

// //slice operation

// console.log(str2.slice(2,9));   //9 index vala element include nahi hoga

// console.log(str2.slice(3)); 

// console.log(str2.slice(-4)); // last ke 4 elements trim krke de dega


// const a="Smriti";
// const b="Singh";
// const c=a+" "+b;
// console.log(c);

// const str1 = `hello guys guys`;
// console.log(str1.replaceAll('guys','birds'))

// const user = " Smriti ";
// console.log(user.trim());
// console.log(user.trimStart());
// console.log(user.trimEnd());

// const names = "smriti, soumya, ansh, anish";
// console.log(names.split(","))



//DATE



// const now = new Date();
// console.log(now);    // it shows utc time basically not exactly same as your system
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// //local time
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());   // it starts everything from 0; like for jan 0 for feb 1
// console.log(now.getHours());
// console.log(now.getSeconds());
// console.log(now.getMinutes());

const abhi = new Date(2025,8,20,23,22,40,125);//year month date hour min sec millisec
console.log(abhi);


const now= Date.now();
const Dates = new Date(1759275037293);
console.log(Dates.toString());



