const express = require('express');
const models = require('./models/user');
const bcrypt = require('crypto');

/**
 * @param {string} username - имя пользователя
 * @param {string} email - email
 * @param {string} password - пароль
 */

function authentication(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    const fields = [];
    if (!email) fields.push('email');
    if (!password) fields.push('password');

    res.json({
      Success: false,
      error: 'Все поля должны быть заполнены!'
    });
  } else {
    models.User.findOne({
      email
    })
      .then(user => {
        if (!user) {
          res.json({
            Success: false,
            error: 'Логин и пароль неверны!',
          });
        } else {
          bcrypt.compare(password, user.password, function(err, result) {
            if (!result) {
              res.json({
                Success: false,
                error: 'Логин и пароль неверны!'
              });
            } else {
              req.session.userId = user.id;
              req.session.useremail = user.email;
              res.json({
                Success: true
              });
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
}

function registration(req, res) {
  console.log( username, email, password, repeatpassword );
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const repeatpassword = req.body.repeatpassword;
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
    models.User.findOne(function(err, item){
      username
    }).then(user => {
      if (!user) {
        bcrypt.hash(password, null, null, (err, hash) => {
          models.User.create({
            username,
            email,
            password: hash
          })
            .then(user => {
              console.log(user);
              res.json({
                Success: true
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

module.exports = {
  authentication,
  registration,
  logout
}
