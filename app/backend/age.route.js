const express = require('express');
const ageRoutes = express.Router();

let Member = require('./age.model');

ageRoutes.route('/add').post(function (req,res){
    let member = new Member(req.body);
    member.save()
        .then(member => {
            res.status(200).json({'member' : 'Member is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

ageRoutes.route('/signin').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    //let member = new Member(req.body);

    Member.findOne({$and:[{email : email},{password : password}]})
        .then(member => {
            if(member){
                member.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});

module.exports = ageRoutes;