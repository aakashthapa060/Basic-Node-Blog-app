const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
	const secrect_token = process.env.JWT_SECRET;
	return jwt.sign({id}, secrect_token, {
		expiresIn: maxAge
	})
}

module.exports = {maxAge,createToken}