const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes")
const productosRoutes = require('./routes/productosRoutes')
const userRoutes = require('./routes/userRoutes')
const methodOverride = require('method-override');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3001, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:3001`);
});

app.use("/", mainRoutes)
app.use("/velas", productosRoutes)
app.use("/usuarios", userRoutes)