const router = require("express").Router();
const user = require("./user")
const products = require("./product")
const seller = require("./seller")

router.use("/users", user)
router.use("/seller", seller)
router.use("/products", products)

module.exports = router;