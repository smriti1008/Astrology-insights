//  console.log("hello world start");




//  const p1 = fetch("https://api.github.com/users");
// console.log(p1);

// p1.then((response)=>{
//     console.log(response);
// })


// p1.then((response)=>{
//     console.log(response.json());
// })



//another way

// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// })                                BADA TAREEKA HAI WE HAVE BETTER WAY




fetch("https://api.github.com/usrs")
.then((response)=>{
    if(!response.ok){
        throw new Error("data is not present");
    }
    return response.json();
})
.then((data)=>{
    // console.log(data);

    const parent = document.getElementById("first");
    // const image = document.createElement("img");
    // image.src = data[0].avatar_url;
    // image.style.height = "40px";
    // image.style.width  ="40px";
    // parent.append(image);

    for(let i=0; i<data.length; i++){
    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = "40px";
    image.style.width  ="40px";
    parent.append(image);
    }
})


//for wrong data

.catch((error)=>{
    const parent = document.getElementById("first");
    parent.textContent = error.message;
    
})




//json file




// const j1={
//     name: "smriti",
//     age: 21,
//     address: "lucknow",
// }


//convert to json

// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat)



// const jsonFormat = `{
//     "name":"smriti",
//     "age": 21

// }`;   //` lagane se string ban gya


//convert to js object

// const JsObject = JSON.parse(jsonFormat);
// console.log(JsObject);

