const express = require("express");
const productosController = require("../controllers/productosControllers.js");

const router = express.Router();
//Verbos HTTP -> GET, POST, PUT, PATCH, DELETE
router.get("/", productosController.productos);
router.get('/detalle/:id', productosController.detalleProductos);
router.get('/nuevo', productosController.formNuevo);
router.post('/nuevo', productosController.crearProducto);
router.get('/editar/:id', productosController.formEditar);
router.put('/:id', productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;