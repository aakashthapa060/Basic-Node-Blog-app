const signUpBtn = document.querySelector(".signupbtn");
const form = document.querySelector("form");
console.log(form)
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;


})