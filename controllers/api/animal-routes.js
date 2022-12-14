const router = require('express').Router();
const { Animal, Foster } = require('../../models');
const withAuth = require('../../utils/withAuth');


// get all animals
router.get('/', (req, res) => {
  Animal.findAll({
      attributes: [
          'name', 
          'species', 
          'age', 
          'weight',
          'special_needs',
      ],
      group: 'species'
  })
  .then(dbAnimalData => res.json(dbAnimalData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// create an animal
router.post('/', withAuth, (req, res) => {
  Animal.create({
      name: req.body.name,
      species: req.body.species,
      age: req.body.age,
      weight: req.body.weight,
      special_needs: req.body.special_needs
  })
  .then(dbAnimalData => res.json(dbAnimalData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;