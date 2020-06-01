const service = require('../service');
const express = require('express');
const router = express.Router();

const ejs = require('ejs');
router.get('/', index);
router.get('/authpage', authpage);
router.get('/regpage', regpage);

function index(req, res) {
    sess = req.session;
    if (!sess.email) {
        res.redirect('/authpage');
    } else {
        const html = ejs.renderFile('../../front/views/index.ejs');
        res.send(html);
    }
}

function authpage(req, res) {
    const html = ejs.renderFile('../../front/views/authpage.ejs');
    res.send(html);
}

function regpage(req, res) {
    const html = ejs.renderFile('../../front/views/regpage.ejs');
    res.send(html);
}

module.exports = router;