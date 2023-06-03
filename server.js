const express = require("express");
const path = require("path");
const api = require("./routes/index");
const { clog } = require("./middleware/clog");

const PORT = process.env.PORT || 3001;

const app = express();
// Middleware for parsing JSON, urlencoded form data, APIs and etc.
app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use(express.static("public"));

app.get("/notes", (req, res) => {
  console.log("----------------");
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => console.log(`App serve at http://localhost:${PORT}`));
