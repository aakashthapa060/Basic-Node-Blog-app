const handleErrors = (err) => {
	// console.log(err.message, err.code)
	let errors = {
		username:"",
		email: "",
		password: ""
	}
	//Duplicate error code
	if(err.message.includes("email_1 dup key") && err.code === 11000){
		errors.email = "This Email has already Registred."
	}
	if(err.message.includes("username_1 dup key") && err.code === 11000){
		errors.username = "This Username is already in use."
	}
	// Validation Errors
	if(err.message.includes("Users validation failed")){
		Object.values(err.errors).forEach(({properties}) => {
			errors[properties.path] = properties.message;
		})
	}

	return errors;
}

module.exports = {
	handleErrors
}