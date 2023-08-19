const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("object");
  res.send({
    msg: "Success",
  });
});

app.listen(5000, () => {
  console.log(`App is listening on 5000`);
});
