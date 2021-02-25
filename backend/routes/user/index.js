const getConnection = require("../../db");
const queries = require("../../db/queries")

const router = require("express").Router();

//CRUD-Create Read Update Delete

//Create
router.post("/", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.AddUser, [body.first_name, body.last_name, body.email, body.pass])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
});

router.get("/", async (req, res) => {
    const uid = req.userDetails.id;
    console.log(uid);
    getConnection()    
        .then(connection => connection.query(queries.GetUser,[uid])
            .then(result => { res.status(200).end(JSON.stringify({user: { result:result[0] } })) 
        console.log(result);
        
        }
            )
            .catch(error => { res.status(500).end(JSON.stringify({ error })) })
        )
        .catch(console.log)
    
});

//Update
router.put("/edit", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.UpdateUser, [body.first_name, body.last_name, body.email, body.pass, body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
})

//delete
router.delete("/signout", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.DeleteUser, [body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { console.log(error); res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
});
router.post("/add", async (req, res) => {
   
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const pass = req.body.password;
    getConnection()
        .then(connection => connection.execute(queries.AddUser, [first_name,last_name,email,pass])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
        
});

module.exports = router;
