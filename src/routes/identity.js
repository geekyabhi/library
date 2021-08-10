const router = require("express").Router();
const { add, login } = require("../controllers/identity");
router.route("/").post(add);
router.route("/login").post(login);

module.exports = router;
