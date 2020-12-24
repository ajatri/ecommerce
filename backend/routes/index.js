const router = require("express").Router();
const user = require("./user")
const products = require("./product")
const seller = require("./seller")
const auth = require("./auth")

router.use("/users", user)
router.use("/seller", seller)
router.use("/products", products)
router.use("/auth", auth);

module.exports = router;