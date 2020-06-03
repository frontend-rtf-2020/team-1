const express = require('express');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const mailer = require('./nodemailer');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/**
 * @param {string} username - имя пользователя
 * @param {string} email - email
 * @param {string} password - пароль
 */
function authentication(req, res) {
  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
    function (req, res) {
      console.log(req.body);
      const { email, password } = req.body;
      if (!email || !password) {
        res.json({
          Success: false,
          error: 'Все поля должны быть заполнены!'
        });
      } else {
        User.findOne({
          email
        })
          .then(user => {
            if (!user) {
              //req.flash('error', 'Логин и пароль неверны!')
              res.json({
                Success: false,
                error: 'Логин и пароль неверны!',
              });
            } else {
              bcrypt.compare(password, user.password, function (err, res) {
                if (res) {
                  //   res.json({
                  //     Success: false,
                  //     error: 'Логин и пароль неверны!'
                  //   });
                  // } else {
                  // req.session.userId = user.id;
                  // req.session.useremail = user.email;
                  return res(null, user);
                  // res.json({
                  //   Success: true
                  // });
                }
              });
            }
          })
          .catch(err => {
            console.log(err);
            res.json({
              Success: false,
              error: 'Ошибка, попробуйте позже!'
            });
          });
      }
    }));
}

function registration(req, res) {
  const { username, email, password, repeatpassword } = req.body;
  console.log(req.body);
  if (!username || !email || !password || !repeatpassword) {
    res.json({
      Success: false,
      error: 'Все поля должны быть заполнены!'
    });
  } else if (username.length < 3 || username.length > 16) {
    res.json({
      Success: false,
      error: 'Длина логина от 3 до 16 символов!',
    });
  } else if (password !== repeatpassword) {
    res.json({
      Success: false,
      error: 'Пароли не совпадают!',
    });
  } else {
    User.findOne({
      username: 'username'
    }).then(user => {
      if (!user) {
        if (!user.confirmed) {
          res.json({
            Success: false,
            message: 'На вашу почту выслано письмо с подтверждением регистрации'
          });
        } else {
          bcrypt.hash(password, 8, function (err, hash) {
            User.create({
              username,
              email,
              password: hash
            })
              .then(user => {
                console.log(user);
                mailer(message);
                res.json({
                  Success: true,
                  
                });
              })
              .catch(err => {
                console.log(err);
                res.json({
                  Success: false,
                  error: 'Ошибка, попробуйте позже!'
                });
              });
          });
        }
      } else {
        res.json({
          Success: false,
          error: 'Имя занято!',
        });
      }
    });
  };
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.redirect('/');
  });
}

const message = {
  to: req.body.email,
  subject: 'Подтверждение регистрации на сайте angermess',
  text: `Здравствуте, ${req.body.username}
  Чтобы активировать аккаунт, перейдите по ссылке:
  https://localhost3000/confirm/3ad5ccdb-f605-40db-9146-2c6bf33877f0
  Спасибо за то, что выбрали наш мессенджер!`
}
mailer(message);
res.json({
  Success: true
});

module.exports = {
  authentication,
  registration,
  logout
}
