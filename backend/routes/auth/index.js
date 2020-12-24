const router = require("express").Router();


router.post("/login", async (req, res) => {
    //login
    res.send("login");
});


module.exports = router;