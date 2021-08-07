var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let userModel = require('../models/user');
let User = userModel.User;
let userController = require('../controllers/userController');
var cookieOptions = {
  signed: true,
  maxAge: 3000000
};
router.get('/', function(req, res, next) {
    let cookies=req.signedCookies.cookies;
    res.cookie('cookies', cookies, cookieOptions)
    res.render('calendar',{cookies:cookies})
});
router.post('/addEvent',(req,res,next)=>{
  let cookies=req.signedCookies.cookies;
    console.log(req.body.title+" "+req.body.date);
    if(cookies.user!=null){
      let newUser = {
          "username": cookies.user.username,
          "userType": cookies.user.userType
      }
      cookies.user.events.push({title:req.body.title,date:req.body.date});
      User.updateOne(newUser,{events:cookies.user.events},(err,userFormDb)=>{
          if(err){
              console.log(err);
          }else{
              res.cookie('cookies', cookies, cookieOptions)
              res.redirect('/calendar')
          }
      })
  }
})
module.exports = router;