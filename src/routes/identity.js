const router = require("express").Router();
const { add } = require("../controllers/identity");

router.route("/").post(add);

module.exports = router;
