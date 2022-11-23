const router = require("express").Router();

router.use("/order", require("./order"))
router.use("/user", require("./user"))

module.exports = router; 