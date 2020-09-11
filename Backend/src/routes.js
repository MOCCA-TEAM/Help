var express = require('express');
const { request, response } = require('express');
var routes = express.Router();


/* Controllers */

var FoodsController= require('./controllers/FoodsController');
var PetshopsController = require('./controllers/PetshopsController');
var SessionController = require('./controllers/SessionController');
var ItemController = require('./controllers/ItemController');
var ProfileController = require('./controllers/ProfileController');


routes.post('/sessions', SessionController.create);

routes.post("/petshops", PetshopsController.create);// cria um petshop
routes.get("/petshops", PetshopsController.list);// lista todos os petshops
routes.delete("/petshops/:id", PetshopsController.delete);// deleta petshop cujo id foi informado

routes.get('/foods', FoodsController.index);
routes.post('/foods', FoodsController.create);

routes.get('/profile', ProfileController.index)
routes.get('/itens', ItemController.index)
routes.post('/itens', ItemController.create);
routes.delete('/itens/:id', ItemController.delete);

module.exports = routes;