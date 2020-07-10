// Création de l'application
const app = require('express')();

const bodyParser = require('body-parser');
const cors = require('cors');

// Référencement des middlewares

// Permet de faire une requête AJAX sur le serveur même si elle vient d'un autre domaine
app.use(cors());
// Permet de gerer la récupération des infos json (requête AJAX)
app.use(bodyParser.json());
// Permet de gerer la récupération des infos d'un formulaire web
app.use(bodyParser.urlencoded({extended: true}));

// Lancement du serveur
app.listen(3000, () => console.log('serveur started'));
