const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send([{
        name:"Broom",
        seller:{
            name:"Usha",
            age:40
        },
        amount:500
    }]);
})

module.exports=router;