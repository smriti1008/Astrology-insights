// async function greet(){
//     return "smriti";
// }

// const response = greet();
// console.log(response)

// response.then((data)=>console.log(data));



// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));

async function github(){

    //for error handling

    try{

    const response = await fetch("https://api.github.com/users");
    if(!response.ok){
        throw new Error("Data is not present")
    }
    const data = await response.json();
    // console.log(data);

    const parent = document.getElementById("first");
    
    for(let user of data){

        const element = document.createElement("div");
        element.classList.add("user");

        const image = document.createElement("img");
        image.src = user.avatar_url;

        const userName = document.createElement("h2");
        userName.textContent = user.login;

        const anchor = document.createElement("a");
        anchor.href = user.html_url;
        anchor.textContent = "visit profile";

        image.addEventListener("click", ()=>{
            const popup = document.createElement('div')
            popup.classList.add('popup')

            popup.innerHTML = `
            <div class="popup-content">
            <span class ="close">&times;</span>
            <img src="${user.avatar_url}" width="100">
            <p>${user.followers_url}</p>
            <p>${user.following_url}</p>
            <p>${user.repos_url}</p>
            </div>
            `;

            document.body.append(popup);

            const closeBtn = popup.querySelector(".close");

            closeBtn.addEventListener("click", ()=>{
                popup.remove();
            });
            popup.addEventListener("click", (e)=>{
                if(e.target===popup){
                    popup.remove();
                }
            })
        })
        element.append(image, userName,anchor);
        parent.append(element);
    }
}
        catch(error){
            console.log("error");
        }
}

github()
// console.log("hello ji")





