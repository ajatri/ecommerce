const getConnection = require("../../db");
const queries = require("../../db/queries")
const router = require("express").Router();


router.post("/", async (req, res) => {
const pid = req.body.pid;
const uid = req.userDetails.id;
console.log('bye')
   
    console.log(pid,uid);
    getConnection()
        .then(connection => connection.execute(queries.AddToWishlist , [pid,uid])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error }))
            console.log(error); }))
        .catch(console.log);
});



router.get("/check", async(req, res) => {
    try {
        const pid = req.body.pid;
const uid = req.userDetails.id;
        getConnection()
        .then(connection => connection.execute(queries.Check, [uid,pid]))
        .then(result => {       
              result=result[0];
              console.log(result,'djfhhrhfksf');
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









module.exports = router;