const loginBtn = document.querySelector(".loginbtn");
const form = document.querySelector("form");
const email_err = document.querySelector(".email-err");
const password_err = document.querySelector(".password-err");
loginBtn.addEventListener("click",async (e) => {
    e.preventDefault()
    const email = form.email.value;
    const password = form.password.value;
    try {
    	const request = await fetch("/login", {
    		method: "POST",
    		headers: {
    			"Content-Type": "application/json"
    		},
    		body: JSON.stringify({email,password})
    	})
    	const data = await request.json();
    	if(data.errors){
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