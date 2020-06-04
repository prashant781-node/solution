const express = require("express");

const environment = require("./config");

const app = express();
var Port = environment.parsed.PORT;

app.get("/", (req, res) => {
  var i = 1;
  var output = "\n";
  while (i <= 30) {
    if ((i % 4 || i % 7) == 0) {
      output = output + '"marcopolo"';
    } else if (i % 4 == 0) {
      output = output + '"marco"';
    } else if (i % 7 == 0) {
      output = output + '"polo"';
    } else output = output + i;

    if (i % 10 == 0) {
      output = output + "\n";
    }
    i++;
  }

  res.write(output);
  res.end();
});
app.listen(Port, () => {
  console.log(`App listening on port ${Port}`);
});
