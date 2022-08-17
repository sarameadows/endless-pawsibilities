const router = require('express').Router();
const Employee = require('../../models/Employee');

// route to post a new employee to database
router.post('/', (req, res) => {
  Employee.create({
      username: req.body.username,
      email: req.body.email,
    //   phone: req.body.phone,
      password: req.body.password,
  })
    .then(dbEmployeeData => {
          req.session.save(() => {
              req.session.user_id = dbEmployeeData.id;
              req.session.username = dbEmployeeData.username;
              req.session.loggedIn = true;

              res.json(dbEmployeeData);
            });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// route to login an employee
router.post('/login', (req, res) => {
  Employee.findOne({
      where: {
          email: req.body.email
      }
  }).then(dbEmployeeData => {
      if(!dbEmployeeData) {
          res.status(400).json({message: 'No employee with that email address'});
          return;
      }

      // verify password
      const validPassword = dbEmployeeData.checkPassword(req.body.password);

      if (!validPassword) {
          res.status(400).json({message: 'Incorrect password'});
          return;
      };

      req.session.save(() => {
          // session variables
          req.session.user_id = dbEmployeeData.id;
          req.session.username = dbEmployeeData.username;
          req.session.loggedIn = true;

          res.json({ user: dbEmployeeData, message: 'You are now logged in!'});
      })
  });
});

//logout
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