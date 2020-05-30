//const app = require('../app');
const database = require('./database');
//const config = require('../config');

const crypto = require('crypto');
//const { createUser, getUser, getAllUsers } = require('database.js');

/*database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.username}`);
    app.listen(config.PORT, () =>
      console.log(`Example app listening on port ${config.PORT}!`)
    );
  })
  .catch(() => {
    console.error('Unable to connect to database');
    process.exit(1);
  });*/
  
/**
 * @param {string} username - имя пользователя
 * @param {string} email - email
 * @param {string} password - пароль
 */

function authentication(req, res) {
  const { email, password } = req.body;
  var hash = crypto.createHash('md5').update(password).digest("hex");
  console.log(hash);

  if (!email || !password) {
    res.json({ Success: false });
  } else if (checkPassword(email, hash)) {
    sess = req.session;
    sess.email = req.body.email;
    res.json({ Success: true });
  } else {
    res.json({ Success: false, error: "Логин или пароль неверны" });
  }
}

function checkPassword(email, hash) {
  const user = database.getUser(email);
  return user.password === hash;
}

function registration(req, res) {
  const { username, email, password, repeatPassword } = req.body;

  if (!username || !email || !password || !repeatPassword) {
    res.json({ Success: false });
  } else if (password !== repeatPassword) {
    res.json({
      Success: false,
      error: 'Пароли не совпадают!'
    });
  } else if (checkEmail(email)) {
    var hash = crypto.createHash('md5').update(password).digest("hex");
    database.createUser(username, email, hash);
    res.json({ Success: true });
  } else {
    res.json({
      Success: false,
      error: 'Имя уже занято!'
    });
  }
}

function checkEmail(email) {
  const users = database.getAllUsers()
  const emails = users.map((user) => { return user.email });
  return !emails.contains(email);
}

 function logout(req, res){
   req.session.destroy((err) => {
     if (err) {
       return console.log(err);
     }
     res.redirect('/');
   });
 }

module.exports =  {
    authentication,
    registration, 
    logout
}
