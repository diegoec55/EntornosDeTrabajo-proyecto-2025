const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../data/velas.json");

function leer() {
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function guardar(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

module.exports = { leer, guardar };