const {Schema,model} = require("mongoose");

const BlogSchemaStructure = {
    user: {
        type:String,
        required: [true, "User is required"]
    },
    title: {
        type: String,
        minlength: [10, "Character should be longer than 10."],
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required:[true, "Content is required"]
    }
}

const BlogSchema = new Schema(BlogSchemaStructure);

const BlogModel = model("Blogs", BlogSchema);

module.exports = BlogModel;