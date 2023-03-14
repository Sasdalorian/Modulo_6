const express = require("express");
const app = express();
const hbs = require("hbs");
const archivo = require("fs");
const path = "./json/cards.json";


hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.set("views", "./views")
app.use(express.static("public"));


app.listen(3000);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/paises",(req,res)=>{
    //resultado = JSON.parse(archivo.readFileSync(path, {encoding:"utf-8"}));
    res.render("index", {resultado: JSON.parse(archivo.readFileSync(path, {encoding:"utf-8"})) } )
})

// error
app.all("*",(req,res)=>{
    res.status(404).send("pagina no existe")
})