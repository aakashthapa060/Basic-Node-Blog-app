const {Router} = require("express");
const router = Router();

const {
    get_blogs,
    create_blog
} = require("../controllers/Blog");

router
.route("/")
.get(get_blogs)
.post(create_blog)

module.exports = router;