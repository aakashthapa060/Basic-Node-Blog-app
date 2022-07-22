const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connect");
const authRoutes = require("./routes/authRoutes");
// Init
const app = express();
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.get("/",(req,res) => {
	res.send("Hello")
})

app.use("/",authRoutes);

// Server
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
