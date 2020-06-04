const fs = require("fs");

writeFile = (segment_array) => {
  fs.writeFile("output_user_story.txt", segment_array.join("\n"), function (
    err
  ) {
    if (err) throw err;
    console.log("Output file generated");
  });
};

module.exports = writeFile;
