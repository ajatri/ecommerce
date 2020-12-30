const getConnection = require("../../db");
const queries = require("../../db/queries")

const router = require("express").Router();

//CRUD-Create Read Update Delete

//Create
router.post("/",


    async (req, res) => {
        const { body } = req;
        getConnection()
            .then(connection => connection.execute(queries.AddSeller, [body.name, body.email, body.phone, body.address])
                .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
                .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
            .catch(console.log);
    }


);

//Read
router.get("/", async (req, res) => {
    getConnection()
        .then(connection => connection.query(queries.GetAllSellers)
            .then(result => { res.status(200).end(JSON.stringify({ sellers: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) })
        )
        .catch(console.log)
    //add more logic in future to get seller by id
});

//Update
router.put("/", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.UpdateSeller, [body.name, body.email, body.phone, body.address, body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
})

//delete
router.delete("/", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.DeleteSeller, [body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { console.log(error); res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
});
module.exports = router;