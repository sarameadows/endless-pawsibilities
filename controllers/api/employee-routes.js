const router = require('express').Router();
const Employee = require('../../models/Employee');

// route to post a new employee to database
router.post('/', (req, res) => {
  Employee.create({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
  })
      .then(dbUserData => {
          req.session.save(() => {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
  });
});

// route to login an employee
router.post('/login', (req, res) => {
  Employee.findOne({
      where: {
          username: req.body.username
      }
  }).then(dbUserData => {
      if(!dbUserData) {
          res.status(400).json({message: 'No user with that email address'});
          return;
      }

      // verify password
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
          res.status(400).json({message: 'Incorrect password'});
          return;
      }

      req.session.save(() => {
          // session variables
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;

          res.json({ user: dbUserData, message: 'You are now logged in!'});
      })
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});

module.exports = router;