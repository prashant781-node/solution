const checkInteger = require("./checkInteger");

function convertSegmentToInteger(line1, line2, line3) {
  let integerValue = "";
  for (let j = 2; j <= 27; j = j + 3) {
    let segment_Code = 0;
    if (line1[j] === "_") {
      segment_Code = segment_Code | 1;
    }
    if (line2[j + 1] === "|") {
      segment_Code = segment_Code | 2;
    }
    if (line2[j - 1] === "|") {
      segment_Code = segment_Code | 32;
    }
    if (line2[j] === "_") {
      segment_Code = segment_Code | 64;
    }
    if (line3[j + 1] === "|") {
      segment_Code = segment_Code | 4;
    }
    if (line3[j - 1] === "|") {
      segment_Code = segment_Code | 16;
    }
    if (line3[j] === "_") {
      segment_Code = segment_Code | 8;
    }
    integerValue = integerValue + checkInteger(segment_Code);
  }
  return integerValue;
}

module.exports = convertSegmentToInteger;
