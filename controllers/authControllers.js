const User = require("../models/User");
const {handleErrors} = require("../errorHandler/authErrorHandler");
console.log(handleErrors)
const login_get = (req,res) => {
	res.send("Login")
}
const login_post = async (req,res) => {

}

const signup_get = (req,res) => {
	res.send("Sign up")
}
const signup_post = async (req,res) => {
	try {
		const data = req.body;
		const user = await User.create(data)
		res.status(200).json({user})
	} catch(e) {
		console.log(handleErrors(e));
		// console.log(e);
	}
}

module.exports = {
	login_get,
	login_post,
	signup_get,
	signup_post
}

