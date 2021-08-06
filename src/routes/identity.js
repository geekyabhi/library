const router = require("express").Router();
const { add, getOne } = require("../controllers/identity");

router.route("/").post(add);
router.route("/:id").get(getOne);

module.exports = router;
