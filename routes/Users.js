const {Router} = require("express");
const router = Router();
const {
    get_user,
    create_user
}= require("../controllers/Users");

router
.route("/")
.post(create_user)

router
.route("/:userInfo")
.get(get_user)
module.exports = router;