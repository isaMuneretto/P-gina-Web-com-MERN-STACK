const route = require('express').Router(); //cria rotas fora do arquivo principal
const userController = require('../controllers/user.controller')

route.get("/", userController.soma)  //a função de callback vai ficar desmembrada dentro de controllers

module.exports = route;  //exportanto a rota para ser usada no módulo index
