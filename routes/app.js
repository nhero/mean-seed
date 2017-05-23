var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/message', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
      firstName: 'Nate',
      lastName: 'Hero',
      password: 'asdf1234',
      email: email,
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
