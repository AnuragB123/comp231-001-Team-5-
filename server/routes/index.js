var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  let cookies = req.signedCookies.cookies;

  res.render('index', { cookies: cookies });
});
router.get('/grader',(req,res,next)=>{
  let cookies = req.signedCookies.cookies;

  res.render('grader', { cookies: cookies });
})

/* POST Route show the login page*/
router.post('/login', userController.processLoginPage);

/* POST  register page */
router.post('/updateUser', userController.updateUserInfo);
router.post('/register', userController.processRegisterPage);
router.get('/logout',userController.performLogout)

module.exports = router;
