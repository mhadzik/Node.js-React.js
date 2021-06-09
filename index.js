const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there", bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https://git.heroku.com/gentle-scrubland-54938.git - Heroku repo
// https://gentle-scrubland-54938.herokuapp.com/ - Heroku app
