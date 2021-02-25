const getConnection = require("../../db");
const queries = require("../../db/queries")
const router = require("express").Router();


router.post("/", async (req, res) => {
    const { body } = req;
    console.log('hyhsbchsabchbchabc')
const uid = req.userDetails.id;
console.log(uid)
console.log(uid,body.name,body.house,body.area,body.landmark,body.city,body.rajya,body.pin,body.phone);
    getConnection()
        .then(connection => connection.execute(queries.AddAddress, [uid,body.name,body.house,body.area,body.landmark,body.city,body.rajya,body.pin,body.phone])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error }))
                console.log(error); }))
            .catch(console.log);
    });

router.get("/", async (req, res) => {
    const uid = req.userDetails.id;
    console.log(uid);
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