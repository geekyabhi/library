const router = require("express").Router();
const { add, getOne } = require("../controllers/identity");
const { protect } = require("../middleware/auth");
router.route("/").post(add);
router.route("/:id").get(protect, getOne);

module.exports = router;
