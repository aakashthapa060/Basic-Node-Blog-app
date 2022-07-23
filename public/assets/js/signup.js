const signUpBtn = document.querySelector(".signupbtn");
const form = document.querySelector("form");
const username_err = document.querySelector(".username-err");
const email_err = document.querySelector(".email-err");
const password_err = document.querySelector(".password-err");
signUpBtn.addEventListener("click",async (e) => {
    e.preventDefault()
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
    	const request = await fetch("/signup", {
    		method: "POST",
    		headers: {
    			"Content-Type": "application/json"
    		},
    		body: JSON.stringify({username,email,password})
    	})
    	const data = await request.json();
    	if(data.errors){
    		username_err.innerHTML = data.errors.username
    		email_err.innerHTML = data.errors.email
    		password_err.innerHTML = data.errors.password
    	}
    	if(data.user){
    		location.assign("/")
    	}
    } catch(e) {
    	// statements
    	console.log(e);
    }

})