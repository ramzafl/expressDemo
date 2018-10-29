const express = require("express");
const app = express();
require("./prod")(app);

const values = [
  "Gameplay first",
  "Commit to quality",
  "Play nice; play fair",
  "Embrace your inner geek",
  "Every voice matters",
  "Think globally",
  "Lead Responsibly",
  "Learn and grow"
];

app.get("/api/message", (req, res) => {
  res.send("hire me plz.");
});

app.get("/api/random", (req, res) => {
  let random = Math.floor(Math.random() * 8);
  res.send(values[random]);
});
app.listen(3000, () => console.log("Listening on port 3000"));
