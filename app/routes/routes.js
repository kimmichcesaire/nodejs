const express = require('express');
const homeController = require('../controllers/homeController.js');
 const classesController = require('../controllers/classesController.js');
 
 
// permet d'indiquer les routes a emprunter
const router = express.Router();
 
 
 
//Mise en place d'une route
router.get('/' , homeController.getHomePage);
//page d'entrainement
router.get('/toto' , homeController.getTotoPage);
//mon teste
router.get('/ac' , homeController.getAcPage);
//mise en place de la route qui mene à la page de la liste des listes
router.get('/classelist' , classesController.getClasslistPage)
 
 
 
 
module.exports = router;
 