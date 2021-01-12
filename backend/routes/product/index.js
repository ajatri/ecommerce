const getConnection = require("../../db");
const queries = require("../../db/queries")

const router = require("express").Router();

//CRUD-Create Read Update Delete

//Create
router.post("/", async (req, res) => {
    const { body } = req;

    getConnection()
        .then(connection => connection.execute(queries.AddProduct, [body.name, body.price, body.image, body.des])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error }))
            console.log(error); }))
        .catch(console.log);
});

//Read
router.get("/", async (req, res) => {
    const uid = req.userDetails.id;
    getConnection()    
        .then(connection => connection.query(queries.GetAllProducts,[uid,uid])
            .then(result => { res.status(200).end(JSON.stringify({ products : { result:result[0] } })) 
        console.log(result);
        
        }
            )
            .catch(error => { res.status(500).end(JSON.stringify({ error })) })
        )
        .catch(console.log)
    //add more logic in future to get seller by id
});
//Update
router.put("/", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.UpdateProduct, [body.name, body.price, body.image, body.des, body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
})

//delete
router.delete("/", async (req, res) => {
    const { body } = req;
    getConnection()
        .then(connection => connection.execute(queries.DeleteProduct, [body.id])
            .then(result => { res.status(200).end(JSON.stringify({ message: { result: result[0] } })) })
            .catch(error => { console.log(error); res.status(500).end(JSON.stringify({ error })) }))
        .catch(console.log);
});
module.exports = router;
