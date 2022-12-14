const router = require("express").Router();

router.use("/order", require("./order"));
router.use("/product", require("./product"));
router.use("/order_products", require("./order_products"));
router.use("/user", require("./user"));

module.exports = router;
