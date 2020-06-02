const service = require('../service');
const express = require('express');
const router = express.Router();

const ejs = require('ejs');
router.get('/', index);
router.get('/authpage', (req, res) => {
    res.render('authpage');
  });

router.get('/regpage', (req, res) => {
    res.render('regpage');
  });

function index(req, res) {
    sess = req.session;
    if (!sess.email) {
        res.redirect('/authpage');
    } else {
        res.render('index');
    }
}

module.exports = router;