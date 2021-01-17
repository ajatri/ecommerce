const getConnection = require("../../db");
const queries = require("../../db/queries")
const router = require("express").Router();


router.post("/", async (req, res) => {
const pid = req.body.pid;
const uid = req.userDetails.id;
console.log('bye')
   
    console.log(pid,uid);
    getConnection()
        .then(connection => connection.execute(queries.AddToCart , [pid,uid])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error }))
            console.log(error); }))
        .catch(console.log);
});

router.get("/cart", async (req, res) => {
   
    const uid = req.userDetails.id;
    console.log('bye')
       
        console.log(uid);
        getConnection()
            .then(connection => connection.execute(queries.ShowCart ,[uid] )
                .then(result => { res.status(200).end(JSON.stringify({ cart : { result: result[0] } })) })
                .catch(error => { res.status(500).end(JSON.stringify({ error }))
                console.log(error); }))
            .catch(console.log);
    });
module.exports = router;