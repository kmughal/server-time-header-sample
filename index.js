const Express = require("express");
const bodyParser = require("body-parser");

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static("public"));

app.get("/hello-world", (req, res) => {
  res.header("Server-Timing", "miss, db;dur=53, app;dur=47.2");
  res.status(200).send("Hello World");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server opened : ", port));
