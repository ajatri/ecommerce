const router = require("express").Router();
const jwt = require('jsonwebtoken');

router.post("/login", (req, res) => {
    try {
        const user = req.body.user;
        // database password
        const token = jwt.sign({ user: user }, 'secretkey', { expiresIn: 60 * 60 });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error });
    }
});


function authMiddleware(req, res, next) {
    console.log(req.headers);
    const bearerHeader = req.headers['authorization'];
    //Bearer <token>
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');["Bearer", "<token>"]
        const bearerToken = bearer[1];
        try {
            const authData = jwt.verify(bearerToken, 'secretkey');
            next();
        } catch (error) {
            res.status(403).json({ message: "Not authenticated" });
        }
    }
    else {
        res.sendStatus(403);
    }
}

module.exports = {
    router, authMiddleware
}