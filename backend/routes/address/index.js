const getConnection = require("../../db");
const queries = require("../../db/queries")
const router = require("express").Router();


router.post("/", async (req, res) => {
    const { body } = req;
    console.log('hyhsbchsabchbchabc')
const uid = req.userDetails.id;
console.log(uid)
console.log(uid,body.landmark,'hruuuuu', body.city, body.email, body.phone, body.pin,body.rajya);
    getConnection()
        .then(connection => connection.execute(queries.AddAddress, [uid,body.landmark, body.city, body.rajya, body.email, body.phone, body.pin])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
});

router.get("/address", async (req, res) => {
    const uid = req.userDetails.id;
   // console.log(uid);
    getConnection()    
        .then(connection => connection.query(queries.GetAddress,[uid])
            .then(result => { res.status(200).end(JSON.stringify({ address : { result:result[0] } })) 
        console.log(result);
        
        }
            )
            .catch(error => { res.status(500).end(JSON.stringify({ error })) })
        )
        .catch(console.log)
    
});
module.exports = router;