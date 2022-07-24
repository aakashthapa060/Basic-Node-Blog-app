const {Router} = require("express");
const router = Router();
const {
	login_get,
	login_post,
	signup_get,
	signup_post,
	logout
} = require("../controllers/authControllers");

router
.route("/login")
.get(login_get)
.post(login_post)

router
.route("/signup")
.get(signup_get)
.post(signup_post)

router
.route("/logout")
.get(logout)
module.exports = router;