const router = require("express").Router();
const jwt = require('jsonwebtoken');
const getConnection = require("../../db");
const queries = require("../../db/queries")


router.post("/login", async({body:{user:{username,password}}}, res) => {
    try {
        getConnection()
        .then(connection => connection.execute(queries.CheckUser, [username,password]))
        .then(result => {       
              result=result[0];
            
	            if(result.length>0){
                    const payload = { username, password, id: result[0].id };
  	          	const token = jwt.sign(payload, 'secretkey', { expiresIn: 60 * 60 });
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
            const payload = jwt.verify(bearerToken, 'secretkey');
           req.userDetails=payload;
            next();
        } catch (error) {
            res.status(403).json({ message: "Not authenticated" });
            console.log(error);
        }
    }
    else {
        res.sendStatus(403);
    }
}

module.exports = {
    router, authMiddleware
}