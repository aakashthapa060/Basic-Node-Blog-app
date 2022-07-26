const Blog = require("../models/Blog");
const {BlogErrorHandler} = require("../utils/errorHandler");

const get_blogs = async (req,res) => {
    try{
        const blogs = await Blog.find({});
        res.status(200).json({blogs});
    } catch(e) {
        console.log(e)
    }
}

const create_blog = async (req,res) => {
    try{
        const data = req.body;
        const blog = await Blog.create(data);
        res.status(201).json({blog});
    } catch(e) {
        let error = BlogErrorHandler(e);
        res.status(400).json({error})
    }
}


module.exports = {
    get_blogs,
    create_blog
}