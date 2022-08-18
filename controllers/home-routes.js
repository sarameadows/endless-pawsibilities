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

        // two different templates - couldnt access the loggedIn property from within the animals list
        if (req.session.loggedIn) {
            res.render('homepage-loggedin', { animals, loggedIn: req.session.loggedIn });
        } else {
            res.render('homepage', { animals, loggedIn: req.session.loggedIn });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

  //login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    
    res.render('login', { loggedIn: req.session.loggedIn });
});

// edit route
router.get('/edit/:id', (req, res) => {
    Animal.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbAnimalData => {
        if (!dbAnimalData) {
            res.status(404).json({message: 'No animal with this ID was found.'});
        } else {
            const animal = dbAnimalData.get({plain: true});

            res.render('edit', { animal, loggedIn: req.session.loggedIn })
        }
    })
})


module.exports = router;