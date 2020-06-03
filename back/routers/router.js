const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.get('/', index);
router.get('/', (req, res) => {
  res.render('authpage');
});

router.get('/authpage', (req, res) => {
  res.render('authpage');
});

router.get('/regpage', (req, res) => {
  res.render('regpage');
});

router.post('/authpage', passport.authenticate('authpage', {
  successRedirect: '/index',
  failureRedirect: '/',
  failureFlash: true
}));

// function index(req, res) {
//   if (!sess.email) {
//     res.locals.greeting = `Добро пожаловать!`;
//     res.redirect('/authpage');
//   } else {
//     res.locals.greeting = `Добро пожаловать, ${username}!`;
//     res.locals.action = "Выйти";
//     res.render('index');
//   }
// }

module.exports = router;