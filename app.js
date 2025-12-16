const express = require("express");
const path = require("path");
const app = express();
const mainRoutes = require("./routes/mainRoutes")
const productosRoutes = require('./routes/productosRoutes')
const userRoutes = require('./routes/userRoutes')
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", mainRoutes)
app.use("/velas", productosRoutes)
app.use("/usuarios", userRoutes)

const server = app.listen(3001, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:3001`);
});