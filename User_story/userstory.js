const convertSegmentToInteger = require("./convertSegmentToInteger");
const fileWrite = require("./fileWrite.js");

const fs = require("fs");
const filePath = "./input_user_story_1.txt";
var fileBuffer = fs.readFileSync(filePath);
var to_string = fileBuffer.toString();
var split_lines = to_string.split("\n");

var lines_no = split_lines.length - 1;
var segment_array = [];
for (var i = 1; i <= lines_no; i = i + 4) {
  const line1 = JSON.stringify(split_lines[i - 1]);
  const line2 = JSON.stringify(split_lines[i]);
  const line3 = JSON.stringify(split_lines[i + 1]);
  var segment = convertSegmentToInteger(line1, line2, line3);
  segment_array.push(segment);
}

fileWrite(segment_array);


