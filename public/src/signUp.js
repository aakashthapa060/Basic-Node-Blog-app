
const createUserBtn = document.querySelector(".createUserBtn");
const form = document.querySelector(".createUser");
const username = form.username;
const email = form.email;
const usernameHelp = document.querySelector("#usernameHelp");
const emailHelp = document.querySelector("#emailHelp")

// Check User with and AND Email has already been created
const checkUserExist = async (URL,changeElText, ElText) => {
    try {
        const response = await fetch(URL, {
            method: "GET"
        })
        const data = await response.json();
        if(data.sucess){
            changeElText.innerHTML = ElText
        }
        else{
            changeElText.innerHTML = ""
        }
    } catch (e) {
        console.log("hi")
    }


}

const emailCheck = () => {
    const emailValue = email.value;
    const URL = `/api/users/${emailValue}`
    checkUserExist(URL,emailHelp, "This Email is already Registerd");

};
const usernameCheck = () => {
    const usernameValue = username.value;
    const URL = `/api/users/${usernameValue}`
    checkUserExist(URL, usernameHelp, "This Username is already in Use");
};


username.addEventListener("change",usernameCheck);
email.addEventListener("change",emailCheck);


// Create User
createUserBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const URL = "/api/users/";
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username,email,password})
        })
        const data = await response.json();
        location.assign("/")
    } catch (e) {
        console.log(e)
    }
    
})