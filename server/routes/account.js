var express = require('express');
var router = express.Router();

var cookieOptions = {
    signed: true,
    maxAge: 3000000
};
/* GET home page. */
router.get('/', function(req, res, next) {
    let cookies = req.signedCookies.cookies;
    if (cookies.user != null) {
        console.log("cookies " + cookies.user);
        res.render("account", { cookies: cookies });
    } else {
        res.render('account', { cookies: cookies });
    }
});

module.exports = router;