const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt")
const {maxAge,createToken} = require("../utils/createToken");
const {handleErrors} = require("../utils/authErrorHandler");
const {encrypt}= require("../utils/encrypt");
const req = require("express/lib/request");

const login_get = (req,res) => {
	res.send("Login")
}
const login_post = async (req,res) => {
	const {email,password} = req.body;
	try{
		const user = await User.login(email,password);
		const token = createToken(user._id);
		res.cookie("userAuthenticated", token, {httpOnly: true, maxAge: maxAge * 1000});
		res.status(200).json({user: user._id})
	} catch(e){
		let errors = handleErrors(e);
		res.status(400).json({errors})
	}
}

const signup_get = (req,res) => {
	res.send("Sign up")
}
const signup_post = async (req,res) => {
	const {username,email} = req.body;
	let {password} = req.body;
	try {
		password = await encrypt(password);
		const user = await User.create({username,email,password});
		const token = createToken(user._id);
		res.cookie("userAuthenticated", token, {httpOnly: true, maxAge: maxAge * 1000});
		res.status(200).json({user})
	} catch(e) {
		let errors = handleErrors(e)
		res.status(400).json({errors})
	}
}

const logout = (req,res) => {
	res.cookie("userAuthenticated", "", {maxAge:1});
	res.redirect("/")
}
module.exports = {
	login_get,
	login_post,
	signup_get,
	signup_post,
	logout
}

