const router = require("express").Router();
const jwt = require('jsonwebtoken');

router.post("/login", (req, res) => {
    try {
        const token = jwt.sign({ user: user }, 'secretkey');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post("/verify", fetchToken, (req, res) => {
    try {
        const authData = jwt.verify(req.token, 'secretkey');
        res.json({ message: "verified", authData });
    } catch (error) {
        res.status(500).json({ error });
    }
});

function fetchToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.sendStatus(403);
    }
}


module.exports = router;