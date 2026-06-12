import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.locals.year = new Date().getFullYear();

const renderPage = (view) => (req, res) => res.render(view);

app.get("/", renderPage("home"));
app.get("/pricing", renderPage("pricing"));
app.get("/login", renderPage("login"));

app.post("/login", (req, res) => {
  console.log("Login request:", req.body);
  res.redirect("/login");
});

app.post("/signup", (req, res) => {
  console.log("Signup request:", req.body);
  res.redirect("/login");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

const isVercel = process.env.VERCEL === "1";

if (!isVercel) {
  app.listen(PORT, () => {
    console.log(`moreHOPE WebDev PORT: ${PORT}`);
  });
}

export default app;
