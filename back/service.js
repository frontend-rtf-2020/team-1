const User = require('./models/user');
const bcrypt = require('bcryptjs');
const mailer = require('./nodemailer');

/**
 * @param {string} username - имя пользователя
 * @param {string} email - email
 * @param {string} password - пароль
 */
function authentication(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({
      Success: false,
      error: 'Все поля должны быть заполнены!',
    });
  } else {
    User.findOne({
      email
    })
      .then(user => {
        if (!user) {
          res.json({
            Success: false,
            error: 'Логин и пароль неверны!'
          });
        } else {
          bcrypt.compare(password, user.password, function (err, result) {
            if (!result) {
              res.json({
                Success: false,
                error: 'Логин и пароль неверны!'
              });
            } else {
              req.session.userId = user.id;
              req.session.useremail = user.email;
              console.log(req.session);
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
};

function registration(req, res) {
  const { username, email, password, repeatpassword } = req.body;
  console.log(req.body);
  if (!username || !email || !password || !repeatpassword) {
    res.json({
      Success: false,
      error: 'Все поля должны быть заполнены!'
    });
  } else {
    User.findOne({
      email: 'email'
    }).then(user => {
      if (!user) {
        bcrypt.hash(password, 8, function (err, hash) {
          User.create({
            username,
            email,
            password: hash
          })
            .then(user => {
              console.log(user);
              const message = {
                to: req.body.email,
                subject: 'Подтверждение регистрации на сайте angermess',
                text: `
                Здравствуте, ${req.body.username}
                Спасибо за то, что выбрали наш мессенджер!`
              }
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
    res.redirect('/authpage');
  });
}

function getCurrentUserData(req, res) {
  // const sess = req.session;
  // const userId = req.session.userId;
  // // const username = req.session.username;
  // const useremail = req.session.useremail;
  // console.log(sess);
  res.json({ email: "useremail", username: "кое-кто" });
}

function searchUsers(req, res) {
  const toSearch = req.body.searchPanel;
  User.find(toSearch)
    .then(res.json({toSearch}));
}

module.exports = {
  authentication,
  registration,
  logout,
  getCurrentUserData,
  searchUsers
}
