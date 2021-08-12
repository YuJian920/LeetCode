// 思路：没什么思路了，转成数字加一再转回去，这里用了BigInt，不然会出现精度丢失的问题
var plusOne = function (digits) {
  digits = BigInt(digits.join(""));
  digits += 1n;
  digits = Array.from(String(digits));
  return digits;
};
