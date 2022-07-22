const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connect");

// Init
const app = express();
dotenv.config();

const PORT= process.env.PORT;
const URI = process.env.DATABASE_URL;
const start = async (req,res) => {
	try {
		connectDB(URI)
		app.listen(PORT, () => {
			console.log(`Server is running on PORT: ${PORT}`)
		})
	} catch(e) {
		// statements
		console.log(e);
	}
}

start()
