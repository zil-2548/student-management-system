var express = require('express');
var router = express.Router();
var {insertQuery,update,finde,removedata,couersfindee}= require('../DATA-BASE/MongoDB')
let database_name = "Student_Managment";
let collection_name= "Couers";

//GET COUERS NAME
router.get('/name', async function(req, res, next) {
    let output=await couersfindee(database_name,collection_name);
    if(output!=1) {//res.send("testing");
        // res.json({"msg":"record found"});
        res.json(output);
    }
    else
    {
        res.json({"msg":"record not found"});
    }
});

/* GET users listing. */
router.get('/', async function(req, res, next) {
    let output=await finde(database_name,collection_name);
    if(output!=1) {//res.send("testing");
        // res.json({"msg":"record found"});
        res.json(output);
    }
    else
    {
        res.json({"msg":"record not found"});
    }
});

router.post('/',async function(req, res, next) {
    let output =  await insertQuery(database_name,collection_name,req.body);
    console.log(output);
    if (output==0){
        res.json({"msg":"Data inserted"});
    }else {
        res.json({"msg":"Data not inserted"});
    }
});

router.put('/',async function(req,res,next){
    let output= await update(database_name,collection_name,req.body.id,req.body);
    console.log(output)
    if(output===0){
        res.json({"msg":"Data Updated"});
    }else {
        res.json({"msg":"Data Not Updated"})
    }
});

router.delete("/", async function (req, res, next) {
    let output = await removedata(database_name,collection_name,req.body.id);
    console.log(output);
    if (output===0)
    {
        res.json({"msg":"record has been deleted"});
    }
    else
    {
        res.json({"msg":"record has not been deleted"} );
    }

})
module.exports = router;
