const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./database/connect");
const BlogRoute = require("./routes/Blog");
const UserRoute = require("./routes/Users");

const app = express();
dotenv.config();

// Middleware`
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// Route
app.use("/api/blogs", BlogRoute);
app.use("/api/users", UserRoute);


// Server
const PORT = process.env.PORT || 4000;
const DATABASE_PATH = process.env.DATABASE_PATH;

app.listen(PORT, () => {
    connectDB(DATABASE_PATH);
    console.log(`PORT is Listening on: *${PORT}`);
})