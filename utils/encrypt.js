const bcrypt = require("bcrypt");
const {handleErrors} = require("./authErrorHandler")
const encrypt = async (password) => {
	try {
		const saltRound = 10;
		const salt = await bcrypt.genSalt(saltRound);
		const newPassword = await bcrypt.hash(password,salt);
		return newPassword;
	} catch(e) {
		console.log(e)
	}

}

module.exports = {
	encrypt
}