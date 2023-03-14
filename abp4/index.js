const express = require("express");
const app = express();
const hbs = require("hbs");
const archivo = require("fs");
const path = "./json/almuerzos.json";

app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));

app.listen(3000);

app.get("/", (req,res) => res.render("index", {resultado: JSON.parse(archivo.readFileSync(path, {encoding: "utf-8"}))}));