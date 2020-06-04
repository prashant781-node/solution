const checkInteger = require("./checkInteger");

function convertSegmentToInteger(line1, line2, line3) {
  var integer = "";
  for (var j = 2; j <= 27; j = j + 3) {
    var code = 0;
    if (line1[j] === "_") {
      code = code | 1;
    }
    if (line2[j + 1] === "|") {
      code = code | 2;
    }
    if (line2[j - 1] === "|") {
      code = code | 32;
    }
    if (line2[j] === "_") {
      code = code | 64;
    }
    if (line3[j + 1] === "|") {
      code = code | 4;
    }
    if (line3[j - 1] === "|") {
      code = code | 16;
    }
    if (line3[j] === "_") {
      code = code | 8;
    }
    integer = integer + checkInteger(code);
  }
  return integer;
}

module.exports = convertSegmentToInteger;
