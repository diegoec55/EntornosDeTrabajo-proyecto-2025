const express = require("express");
const usersController = require("../controllers/userControllers.js");

const router = express.Router();
//Verbos HTTP -> GET, POST, PUT, PATCH, DELETE
router.get("/", usersController.usuario);
router.get('/perfil/:id', usersController.perfil);
router.get('/nuevo', usersController.formNuevo);
router.post('/nuevo', usersController.crearUsuario);
router.get('/editar/:id', usersController.formEditar);
router.put('/:id', usersController.actualizarUsuario);
router.delete('/:id', usersController.eliminarUsuario);

module.exports = router;