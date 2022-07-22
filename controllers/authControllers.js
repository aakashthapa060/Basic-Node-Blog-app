const User = require("../models/User");
const {handleErrors} = require("../utils/authErrorHandler");
const {encrypt}= require("../utils/encrypt");
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
		const username = req.body.username;
		const email = req.body.email;
		let password = req.body.password;
		password = await encrypt(password);
		const user = await User.create({username,email,password});
		res.status(200).json({user})
	} catch(e) {
		let errors = handleErrors(e)
		res.status(400).json({errors})
	}
}

module.exports = {
	login_get,
	login_post,
	signup_get,
	signup_post
}

