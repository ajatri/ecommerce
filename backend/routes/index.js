const router = require("express").Router();
const user = require("./user")
const products =  require("./product")

router.use("/users",user)
router.use("/products",products)

module.exports=router;