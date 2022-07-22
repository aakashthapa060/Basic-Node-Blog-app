const {Schema,model} = require("mongoose");
const {isEmail} = require("validator")

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
const userModel = model("Users",userSchema);

module.exports = userModel