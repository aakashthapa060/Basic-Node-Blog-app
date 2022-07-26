const BlogErrorHandler = (e) => {
    console.log(e.message)
    const errors = {
        user:"",
        title: "",
        content: "",
    }

    // Validation Errors
    if(e.message.includes("Blogs validation failed")){
		Object.values(e.errors).forEach(({properties}) => {
			errors[properties.path] = properties.message;
		})
    }
    return errors;
}

const AuthErrorHandler = (e) => {
  console.log(e.message,e.code)
  const errors = {
    username: "",
    email: "",
    password: "",
  }

  // Duplicate Error
  if(e.code === 11000){
    if(e.message.includes("username_1 dup key")) errors.username = "This Username is Already Registered";
    else if(e.message.includes("email_1 dup key")) errors.email = "This Email is Already Registered";
  }
  // Validation Error
  if(e.message.includes("Users validation failed")){
    Object.values(e.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    })
  }
  console.log(errors)
}
module.exports = {BlogErrorHandler,AuthErrorHandler}