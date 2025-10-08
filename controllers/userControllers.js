const usersModel = require('../models/usersModel');

module.exports = {
    usuario: (req, res) => {
        const usuarios = usersModel.leer();
        res.render("usuarios", {titulo: "Usuarios",css:"home.css", usuarios})
    },
    perfil: (req, res) => {
            let id = req.params.id
            const usuarios = usersModel.leer();
            let usuario = usuarios.find(usuario => usuario.id == id)
            res.render("perfilUsuario", { titulo: "Detalle de usuario",css:"home.css", usuario })
        },
        formNuevo: (req, res) => {
            res.render("usuarioNuevo", { titulo: "Detalle de usuario",css:"home.css" })
        },
        crearUsuario: (req, res) => {
            const usuarios = usersModel.leer();
            const nuevo = {
                id: Date.now(),
                first_name: req.body.name,
                last_name: req.body.lastname,
                email: req.body.email,
                disponible: req.body.disponible === "on",
            }
            usuarios.push(nuevo)
            usersModel.guardar(usuarios)
            res.redirect('/usuarios')
        },
        formEditar: (req, res) => {
            const usuarios = usersModel.leer();
            let id = req.params.id
            let usuario = usuarios.find(usuario => usuario.id == id)
            res.render("usuarioEditar", { titulo: "Edicion de usuarios",css:"home.css", usuario })
        },
        actualizarUsuario: (req, res) => {
            let usuarios = usersModel.leer();
            usuarios = usuarios.map(p => p.id == req.params.id ? {
                ...p,
                first_name: req.body.name,
                last_name: req.body.lastname,
                email: req.body.email,
                disponible: req.body.disponible === "on",
            }
                : p
            );
            usersModel.guardar(usuarios);
            res.redirect("/usuarios");
        },
        eliminarUsuario: (req, res) => {
            const id = Number(req.params.id);
            let usuarios = usersModel.leer();
            usuarios = usuarios.map(p => {
                if (p.id === id) {
                    return { ...p, disponible: "" };
                }
                return p;
            });
            usersModel.guardar(usuarios);
            res.redirect("/usuarios");
        }
}