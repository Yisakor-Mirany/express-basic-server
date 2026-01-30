const express = require("express");

const app = express();

// Use environment port or default to 3000
const PORT = process.env.PORT || 3000;

/*
 ======================
 Basic Routes
 ======================
*/

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// About route
app.get("/about", (req, res) => {
  res.send("About page");
});

/*
 ======================
 Conditional Routing
 ======================
*/

app.get("/foo", (req, res, next) => {
  const random = Math.random();

  if (random > 0.5) {
    res.send("sometimes this");
  } else {
    next();
  }
});

app.get("/foo", (req, res) => {
  res.send("and sometimes that");
});

/*
 ======================
 Regular Expression Route
 Matches /user and /username
 ======================
*/

app.get(/\/user(name)?/, (req, res) => {
  res.send("Regex route matched");
});

/*
 ======================
 Dynamic Route Handling
 ======================
*/

app.get("/user/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Hello ${username}`);
});

/*
 ======================
 Query String Handling
 ======================
*/

app.get("/get", (req, res) => {
  console.log(req.query);
  res.send("Query parameters logged to console");
});

/*
 ======================
 404 Error Handler
 ======================
*/

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

/*
 ======================
 Start Server
 ======================
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
