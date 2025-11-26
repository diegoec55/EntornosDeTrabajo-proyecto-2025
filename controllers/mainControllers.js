module.exports = {
    home: (req, res) => {
    res.render("home",  {titulo: "Home",css:"home.css"})},
    infoaromas: (req, res) => {
    res.render("infoaromas",  {titulo: "Aromas",css:"infoaromas.css"})},
}