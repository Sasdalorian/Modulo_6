const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");
app.set("views", "./view");
app.use(express.static("public"));
hbs.registerPartials(__dirname+"/view/partials");

app.listen(3000);
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/nosotros", (req, res) => {
    console.log("pagina nosotros");
    res.render("nosotros", {nombre: "Sas"});
});
