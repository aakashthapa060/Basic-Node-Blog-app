const {Schema,model} = require("mongoose");
const {isEmail} = require("validator");

const UserSchemaStructure = {
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
		required: [true, "Password is required"],
		minlength: [8, "Password must be 8 characters long"]
	}
}

const UserSchema = new Schema(UserSchemaStructure);

const UserModel = model("Users", UserSchema);

module.exports = UserModel