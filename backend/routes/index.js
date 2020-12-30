const router = require("express").Router();
const user = require("./user")
const products = require("./product")
const seller = require("./seller")
const { router: auth, authMiddleware } = require("./auth")

//protected
router.use("/users", authMiddleware, user)
router.use("/seller", authMiddleware, seller)
router.use("/products", authMiddleware, products)

router.use("/auth", auth); //Non protected

module.exports = router;