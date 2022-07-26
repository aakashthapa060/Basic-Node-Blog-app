const mongoose = require("mongoose");

const connectDB =  async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Connected To DB")
    } catch (e) {
        console.log(e)
    }

}

module.exports = connectDB;