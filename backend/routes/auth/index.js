const router = require("express").Router();
const  jwt     = require('jsonwebtoken');

router.post("/", (req, res) => {
    //login
      const user ={
        id:1,
        username:'brad'
    }
    jwt.sign({user:user},'secretkey',(err,token)=>{
        res.json({
            token
        });
    });
    
  });
  router.post("/verify", verifyToken,(req, res) => {
   jwt.verify(req.token,'secretkey',(err,authData)=>{
       if(err){
           res.sendStatus(403);
       }else{ res.json({
        message:'welcome',
        authData
 

      
    });
}
   
  });
});
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
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