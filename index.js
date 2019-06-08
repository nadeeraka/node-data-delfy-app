const express = require("express");
const app = express();
const path = require("path");
const mainRoute = require("./routes/main");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

//routes
app.use(mainRoute);

const port = process.env.port || 8081;
app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
