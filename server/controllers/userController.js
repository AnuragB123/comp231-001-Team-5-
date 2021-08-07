let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var cookieOptions = {
    signed: true,
    maxAge: 3000000
  };


// create a reference to the model
let userModel = require('../models/user');
let User = userModel.User;
let sha256=require('sha256')

module.exports.processRegisterPage = (req, res, next) => {

    console.log('recieved the request....');
    console.log(req.body.username);
    console.log(req.body.userType);

    let newUser = User({
        "userType":req.body.userType,
        "username": req.body.username,
        "password": sha256(req.body.password),
        "email":req.body.email,
        "phone":req.body.phone,
        "userId":req.body.userId
    });
    User.create(newUser, (err, user)=>{
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(user);
            let cookies=req.signedCookies.cookies;
            if (cookies) {
                cookies.user = user
            } else {
                cookies = {
                    user: user
                }
              }
            res.cookie('cookies', cookies, cookieOptions)
            res.redirect('/account');
        }
    })
}
module.exports.updateUserInfo = (req, res, next) => {
    console.log('recieved the request....');

    let newUser = {
        username: req.body.username,
        email:req.body.email,
        phone:req.body.phone
    }
    console.log(newUser);
    User.findByIdAndUpdate(req.signedCookies.cookies.user._id, newUser,(err, userFormDb)=>{
        if(err){
            console.log(err);
            res.send(err);
        } else if(userFormDb){
            let cookies=req.signedCookies.cookies;
            if (cookies) {
                console.log("userFormDb-> "+ userFormDb);
                cookies.user.username=req.body.username
                cookies.user.email=req.body.email
                cookies.user.phone=req.body.phone
            } 
            res.cookie('cookies', cookies, cookieOptions)
            res.redirect('/account')
        }
    })
}


module.exports.processLoginPage = (req, res, next) => {
    console.log('recieved the request....');
    console.log(req.body.username);
    console.log(req.body.password);

    let newUser = {
        "username": req.body.username
    }
    User.findOne(newUser, (err, user)=>{
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(user);
            let cookies=req.signedCookies.cookies;
            if (cookies) {
                cookies.user = user
            } else {
                cookies = {
                    user: user
                }
              }
            res.cookie('cookies', cookies, cookieOptions)
            res.redirect('/account');
        }
    })
}


module.exports.performLogout = (req, res, next) => {
    let cookies=req.signedCookies.cookies;
    cookies.user=null;
    res.cookie('cookies', cookies, cookieOptions)
    res.redirect('/');
}
