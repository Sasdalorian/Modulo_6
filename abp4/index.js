const express = require("express");
const app = express();
const hbs = require("hbs");
const fs = require("fs");
const path = "./json/almuerzos.json";
const almuerzos = JSON.parse(fs.readFileSync(path, {encoding: "utf-8"}))

app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));

app.listen(3000);

app.get("/", (req,res) => res.render("index", {resultado: almuerzos}));

app.get("/agregar/:nombre/:precio", (req, res) => {
    const nombreU = req.params.nombre;
    const precioU = req.params.precio;
    let almuerzoA = {
        nombre: nombreU,
        precio: parseInt(precioU)
    }

    almuerzos.push(almuerzoA)
    fs.writeFile(path, JSON.stringify(almuerzos), (err) => {})
    res.send('Se ha subido el nuevo platillo');
})

app.get("/eliminar/:nombre", (req, res) => {
    const nombreU = req.params.nombre;
    
})