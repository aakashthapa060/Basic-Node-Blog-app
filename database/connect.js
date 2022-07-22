const mongoose = require("mongoose");

const connectDB = async(url) => {
	try {
		await mongoose.connect(url)
		console.log('Connected to db')
	} catch(e) {
		console.log(e);
	}
}

module.exports = connectDB;