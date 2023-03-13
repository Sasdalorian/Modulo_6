const express = require("express");
const app = express();
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.set("views", "./views")
app.use(express.static("public"));


app.listen(3000);

app.get("/", (req, res) => {
    res.render("index");
});

