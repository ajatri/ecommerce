const router = require("express").Router();
const user = require("./user")
const products = require("./product")
const seller = require("./seller")
const cart = require("./cart")
const wishlist = require("./wishlist")
const { router: auth, authMiddleware } = require("./auth")
const address = require("./address")


router.use("/users", user)
router.use("/seller",authMiddleware,  seller)
router.use("/products",authMiddleware, products)
router.use("/cart",authMiddleware, cart)
router.use("/wishlist",authMiddleware, wishlist)
router.use("/address",authMiddleware, address)
router.use("/auth", auth)


module.exports = router;