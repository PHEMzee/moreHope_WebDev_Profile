require("dotenv").config();

const jsdom = require("jsdom");
const {window} = new jsdom.JSDOM("");
const $ = require("jquery")(window);

document = global.document;
global.window = window;
global.document = window.document;
global.navigator = window.navigator;


const bootstrap = require('bootstrap');
const _ = require("lodash");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/prtFolioDB")

const userSchema = new mongoose.Schema({});

const User = new mongoose.model("User", userSchema);

const year = new Date().getFullYear();
const date = new Date().toLocaleDateString(
    'en-us', 
    {
        weekday:"long", 
        year:"numeric",
        month:"short", 
        day:"numeric"
        });

app.use(express.static('views', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
        }
    }
    }));


app.get("/home", async (req, res) => {
    res.render("home", {year: year})
});

app.get("/", async (req, res) => {
    res.render("tasks", {year: year})
});
app.get("/alien", async (req, res) => {
    res.render("alien", {year: year})
});
app.get("/login", async (req, res) => {
    res.render("login", {year: year})
});
app.get("/about", async (req, res) => {
    res.render("about", {year: year})
});



app.listen(PORT, () =>{
    console.log("moreHOPE WebDev PORT: " + PORT);
});