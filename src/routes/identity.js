const router = require("express").Router();
const { add, getOne, login } = require("../controllers/identity");
const { protect } = require("../middleware/auth");
router.route("/").post(add);
router.route("/:id").get(protect, getOne);
router.route("/login").post(login);

module.exports = router;
