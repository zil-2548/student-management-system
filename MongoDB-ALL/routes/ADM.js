var express = require('express');
var router = express.Router();
var {insertQuery,update,finde,removedata}= require('../DATA-BASE/MongoDB')
let database_name = "Student_Managment";
let collection_name= "Admission";
/* GET users listing. */
router.get('/', async function(req, res, next) {
    let output=await finde(database_name,collection_name);
    if(output!=1) {//res.send("testing");
        res.json(output);
    }
    else
    {
        res.send("record not found");
    }
});

router.post('/',async function(req, res, next) {
    let output =  await insertQuery(database_name,collection_name,req.body);
    console.log(output);
    if (output==0){
        res.send("Data inserted");
    }else {
        res.send("Data not inserted");
    }
});

router.put('/',async function(req,res,next){
    let output= await update(database_name,collection_name,req.body.id,req.body);
    console.log(output)
    if(output===0){
        res.send("Data Updated");
    }else {
        res.send("Data Not Updated")
    }
});

router.delete("/", async function (req, res, next) {
    let output = await removedata(database_name,collection_name,req.body.id);
    console.log(output);
    if (output===0)
    {
        res.send("record has been deleted.");
    }
    else
    {
        res.send("record has not been deleted.");
    }

})
module.exports = router;
