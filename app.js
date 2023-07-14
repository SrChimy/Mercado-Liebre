const express = require ("express");
const app = express();
const path = require ("path");
const dotenv= require('dotenv').config();

app.use(express.static("public"));
app.get("/", function (req, res){
    let home = path.join(__dirname,"./views/home.html")
    res.sendFile(home)
});
app.get("/login", function (req, res){
    let login = path.join(__dirname,"./views/login.html")
    res.sendFile(login)
});
app.get("/register", function (req, res){
    let register = path.join(__dirname,"./views/register.html")
    res.sendFile(register)
});
app.listen(process.env.PORT,() =>{
    console.log ("Estamos corriendo")
});