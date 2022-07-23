const {Schema,model} = require("mongoose");
const {isEmail} = require("validator")
const bcrypt = require("bcrypt");
const userSchemaStructure = {
	username: {
		type: String,
		unique: true,
		required: [true, "Username is required"],
		lowercase:true
	},
	email: {
		type:String,
		unique: true,
		required: [true, "Email is Required"],
		lowercase: true,
		validate: [isEmail, "Please enter valid Email"]
	},
	password: {
		type: String,
		required: true,
		minlength: [8, "Password must be 8 characters long"]
	}
}

const userSchema = new Schema(userSchemaStructure);

// userSchema.pre("save", async function (next) {
// 	const saltRounds = 10;
// 	const salt = await bcrypt.genSalt(saltRounds);
// 	this.password = await bcrypt.hash(this.password,salt);
// 	next();
// })
userSchema.statics.login = async function(email,password) {
	const user = await this.findOne({email});
	if(user){
		const auth = await bcrypt.compare(password, user.password);
		if(auth){
			return user;
		}
		throw Error("Incorrect Password");
	}
	throw Error("Incorrect Email");
}
const userModel = model("Users",userSchema);

module.exports = userModel