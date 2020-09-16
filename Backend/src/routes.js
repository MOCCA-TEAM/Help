var express = require('express');
const { request, response } = require('express');
var routes = express.Router();


/* Controllers */

var FoodsController= require('./controllers/FoodsController');
var PetshopsController = require('./controllers/PetshopsController');
var SessionController = require('./controllers/SessionController');
var ItemController = require('./controllers/ItemController');
var ProfileController = require('./controllers/ProfileController');


routes.post('/sessions', SessionController.create); // Login
routes.get('/profile', ProfileController.index); // Perfil

routes.post('/petshops', PetshopsController.create);// Cria um petshop
routes.get('/petshops', PetshopsController.list);// Listar todos os petshops
routes.delete('/petshops/:id', PetshopsController.delete);// Deleta petshop cujo id foi informado

routes.post('/foods', FoodsController.create);// Criar a comida
routes.get('/foods', FoodsController.index);// Listar todas comidas
routes.delete("/foods/:id", PetshopsController.delete);// Deletar comida

routes.post('/itens', ItemController.create);// Criar o Item
routes.get('/itens', ItemController.index);// Listar todos os itens
routes.delete('/itens/:id', ItemController.delete);// Deletar Item

module.exports = routes;