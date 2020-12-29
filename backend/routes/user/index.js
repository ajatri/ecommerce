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

//Read
router.get("/", async (req, res) => {
    getConnection()    
        .then(connection => connection.query(queries.GetAllUsers)
            .then(result => { res.status(200).end(JSON.stringify({ users : { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) })
        )
        .catch(console.log)
    //add more logic in future to get user by id
});

//Update
router.put("/", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.UpdateUser, [body.first_name, body.last_name, body.email, body.pass, body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
})

//delete
router.delete("/", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.DeleteUser, [body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { console.log(error); res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
});
module.exports = router;
