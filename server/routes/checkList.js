var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let userModel = require('../models/user');
let User = userModel.User;

const app = require('../config/app');
var cookieOptions = {
    signed: true,
    maxAge: 3000000
};
/* GET home page. */
router.get('/', function(req, res, next) {
    let cookies = req.signedCookies.cookies;
    console.log(cookies.user.todo_list);
    res.cookie('cookies', cookies, cookieOptions)
    res.render('checkList', { cookies: cookies })
});
router.post('/todo', (req, res, next) => {
    let cookies = req.signedCookies.cookies;
    if (cookies.user != null) {
        let newUser = {
            "username": cookies.user.username,
            "userType": cookies.user.userType
        }
        cookies.user.todo_list.push(req.body.todo);
        User.updateOne(newUser, { todo_list: cookies.user.todo_list }, (err, userFormDb) => {
            if (err) {
                console.log(err);
            } else {
                console.log("user updated: " + userFormDb.todo_list);
                console.log("cookies user to do list after updated db ->" + cookies.user.todo_list);
                res.cookie('cookies', cookies, cookieOptions)
                res.redirect('/checklist')
            }
        })
    }

})

router.post('/ongoing', (req, res, next) => {
    let cookies = req.signedCookies.cookies;
    console.log(req.body.item)
    if (cookies.user != null) {
        let newUser = {
            "username": cookies.user.username,
            "userType": cookies.user.userType
        }
        console.log(cookies.user.todo_list)
        cookies.user.ongoing_list.push(req.body.item);
        cookies.user.todo_list = removeFromArray(cookies.user.todo_list, req.body.item)
        console.log(cookies.user.todo_list)
        User.updateOne(newUser, {
            todo_list: cookies.user.todo_list,
            ongoing_list: cookies.user.ongoing_list
        }, (err, userFormDb) => {
            if (err) {
                console.log(err);
            } else {
                console.log("user updated: " + userFormDb.todo_list);
                console.log("cookies user to do list after updated db ->" + cookies.user.todo_list);
                res.cookie('cookies', cookies, cookieOptions)
                res.redirect('/checklist')
            }
        })
    }

})

router.post('/done', (req, res, next) => {
    let cookies = req.signedCookies.cookies;
    console.log(req.body.item)
    if (cookies.user != null) {
        let newUser = {
            "username": cookies.user.username,
            "userType": cookies.user.userType
        }
        cookies.user.done_list.push(req.body.item);
        cookies.user.ongoing_list = removeFromArray(cookies.user.ongoing_list, req.body.item)
        User.updateOne(newUser, {
            done_list: cookies.user.done_list,
            ongoing_list: cookies.user.ongoing_list
        }, (err, userFormDb) => {
            if (err) {
                console.log(err);
            } else {
                res.cookie('cookies', cookies, cookieOptions)
                res.redirect('/checklist')
            }
        })
    }

})

function removeFromArray(array, item) {
    let ans = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != item) {
            ans.push(array[i])
        }
    }
    return ans;
}

module.exports = router;