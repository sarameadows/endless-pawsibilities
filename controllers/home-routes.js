const router = require('express').Router();
const sequelize = require('../config/connection');
const {Animal, Employee, Foster} = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    Animal.findAll({
      attributes: [
        'id',
        'name',
        'species',
        'age',
        'weight',
        'special_needs'
      ],
      include: [
        {
          model: Foster,
          attributes: ['first_name', 'last_name', 'email', 'phone']
        }
      ]
    })
      .then(dbAnimalData => {
        const animals = dbAnimalData.map(animal => animal.get({ plain: true }));
  
        res.render('homepage', { animals });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  //login route
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    
    res.render('login');
  });
  

module.exports = router;