function checkInteger(code) {
  var integer;
  switch (code) {
    case 63:
      integer = "0";
      break;
    case 6:
      integer = "1";
      break;
    case 91:
      integer = "2";
      break;
    case 79:
      integer = "3";
      break;
    case 102:
      integer = "4";
      break;
    case 109:
      integer = "5";
      break;
    case 125:
      integer = "6";
      break;
    case 7:
      integer = "7";
      break;
    case 127:
      integer = "8";
      break;
    case 111:
      integer = "9";
      break;
    default:
      integer = "?";
  }
  return integer;
}

module.exports = checkInteger;
