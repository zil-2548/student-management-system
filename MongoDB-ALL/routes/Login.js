var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var {insertQuery,update,finde,removedata}= require('../DATA-BASE/MongoDB')
let database_name = "Student_Managment";
let collection_name= "Users";


//CRATE USER ROUTE
router.post('/register',async function(req, res, next) {

    let email =  req.body.email;
    let password = req.body.password;
    // let id = req.body.id;


     const salt = await bcrypt.genSalt(10);
     const hasepassword = await bcrypt.hash(password,salt);
     let user = ({
         email:email,
         password:hasepassword,
     })
            //JWT TOKEN

        let output =  await insertQuery(database_name,collection_name,user);
        if (output==0){
            res.json({"msg":"Data inserted Succesfull"});
        }else {
            res.json({"msg":"Data Not inserted"});
        }

    //JWT TOKEN

    const {_id} = await output.toJSON();

        const token = jwt.sign({_id:_id},"secret",);
        res.send('USERSJWT',token,{
            httpOnly:true,
            maxAge:24 * 60 * 60 * 1000,
        })
});

module.exports=router;
