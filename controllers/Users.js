const Users = require("../models/Users");
const {AuthErrorHandler} = require("../utils/errorHandler");

const get_user = async(req,res) => {
    try {
        const {userInfo} = req.params
        let user = null;
        let node = {
            email: "",
            username: ""
        };
        console.log(userInfo)
        if(userInfo.includes("@")){
            console.log("True")
            user = await Users.findOne({email:userInfo})
            node.email = true
        }
        else{
            user = await Users.findOne({username:userInfo})
            node.username = true
        }
        if(user){
           res.status(200).json({sucess: true,node,user}) 
        }
        else {
            res.status(404).json({sucess:false, user: null})
        }
    } catch (e) {
        console.log(e)
    }
}
const create_user = async (req,res) => {
    try {
        const userData = req.body;
        const user = await Users.create(userData);
        res.status(201).json({user})
    } catch (e) {
        const errors = AuthErrorHandler(e);
        // console.log(e)
    }
}

module.exports = {
    get_user,
    create_user
}