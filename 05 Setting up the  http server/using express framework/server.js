const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("welcome to home, arvind:)"));
app.post("/arvind", (req, res) => {
  res.json({
    name: "arvind",
    age: 21,
  });
});

app.listen(PORT, () => console.log("App is running on PORT " + PORT));
