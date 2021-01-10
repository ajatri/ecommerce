const router = require("express").Router();
const jwt = require('jsonwebtoken');
const getConnection = require("../../db");
const queries = require("../../db/queries")
router.post("/login", async(req, res) => {
    try {
        const user1 = req.body.user;
        const username=user1.username;
        const password=user1.password;
        console.log(user1,username,password);
      
        getConnection()
        .then(connection => connection.execute(queries.CheckUser, [username,password]))
        .then(result => {       
              result=result[0];
              console.log(result);
	            if(result.length>0){
  	          	const token = jwt.sign({ user: user1 }, 'secretkey', { expiresIn: 60 * 60 });
    	        	res.status(200).json({ token});
              }else{
	              res.status(403).json({error:"user not found"});
              }
        })
        .catch((error)=>{res.status(500).json({ error })});
    } catch (error) {
      console.log(error.message);
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