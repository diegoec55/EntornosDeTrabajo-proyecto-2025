const productModel = require('../models/productModel');

module.exports = {
    productos: (req, res) => {
        const productos = productModel.leer();
        res.render("velas", { titulo: "Velas",css:"home.css", productos })
    },
    detalleProductos: (req, res) => {
        let id = req.params.id
        const productos = productModel.leer();
        let producto = productos.find(producto => producto.id == id)
        res.render("detallesProducto", { titulo: "Detalle de producto",css:"home.css", producto })
    },
    formNuevo: (req, res) => {
        res.render("productoNuevo", { titulo: "Detalle de producto",css:"home.css" })
    },
    crearProducto: (req, res) => {
        const productos = productModel.leer();
        const nuevo = {
            id: Date.now(),
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            disponible: req.body.disponible === "on",
            category: req.body.category,
            stock: Number(req.body.price)
        }
        productos.push(nuevo)
        productModel.guardar(productos)
        res.redirect('/velas')
    },
    formEditar: (req, res) => {
        const productos = productModel.leer();
        let id = req.params.id
        let producto = productos.find(producto => producto.id == id)
        res.render("editarProducto", { titulo: "Edicion de productos",css:"home.css", producto })
    },
    actualizarProducto: (req, res) => {
        let productos = productModel.leer();
        productos = productos.map(p => p.id == req.params.id ? {
            ...p,
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            disponible: req.body.disponible === "on",
            category: req.body.category,
            stock: Number(req.body.price)
        }
            : p
        );
        productModel.guardar(productos);
        res.redirect("/velas");
    },
    eliminarProducto: (req, res) => {
        const id = Number(req.params.id);
        let productos = productModel.leer();
        productos = productos.map(p => {
            if (p.id === id) {
                return { ...p, disponible: "" };
            }
            return p;
        });
        productModel.guardar(productos);
        res.redirect("/velas");
    }

}