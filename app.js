import dotenv from "dotenv";
import { JSDOM } from "jsdom";
import { jQueryFactory } from "jquery/factory";
import lodash from "lodash";
import ejs from "ejs";
import mongoose from "mongoose";
import express from "express";
// import path from "path";

const { window } = new JSDOM( "" );
const $ = jQueryFactory(window);
const app = express();
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/prtFolioDB");

const userSchema = new mongoose.Schema({});

const User = new mongoose.model("User", userSchema);

const year = new Date().getFullYear();
const date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

app.use(
  express.static("views", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.set("Content-Type", "application/javascript");
      }
    },
  }),
);

app.get("/", async (req, res) => {
  res.render("home", { year: year });
});

app.listen(PORT, () => {
  console.log("moreHOPE WebDev PORT: " + PORT);
});
