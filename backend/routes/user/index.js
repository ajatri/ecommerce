const router = require("express").Router();

router.get("/",

    // request handler
    (req, res) => {

        res.send([{
            name: "Rakshith",
            age: 100
        }]);

    }



)

module.exports = router;