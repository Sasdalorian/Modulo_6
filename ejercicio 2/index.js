const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static("public"));
app.set("view engine", "hbs");

//Para usar partials
hbs.registerPartials(__dirname + "/views/partials")

//levantar el server
app.listen(3000);

app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/contacto", (req, res)=>{
    res.render("contacto");
})
app.get("/premios", (req, res)=>{
    res.render("premios", {
        premios: [
            {premio:"1 Kilo de papas"},
            {premio:"Juego Steam de $2000"},
            {premio:"1 hora de atencion de Letuse"},
            {premio:"Meme semanal de Letuse"},
    ]});
});