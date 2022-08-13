const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// unsure why but i need this and the .findAll() call below to make the tables actually generate in my local db
// can remove these once the routes are set up, im pretty sure
const {Animal} = require('./models');

sequelize.sync({force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('http://localhost:' + PORT)
    });

    Animal.findAll().then(dbAnimalData => console.log(dbAnimalData));
});