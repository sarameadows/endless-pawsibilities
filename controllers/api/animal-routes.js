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

// update animal
router.put('/:id', withAuth, (req, res) => {
    Animal.update(
        {
            name: req.body.name,
            age: req.body.age,
            weight: req.body.age,
            special_needs: req.body.special_needs
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbAnimalData => {
        if (!dbAnimalData) {
            res.status(404).json({message: 'No post with that ID was found'});
            return;
        }
        res.json(dbAnimalData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;