// 解法一思路: 将数字转为数组并反转再转为字符串，如果大于32位则返回0
var reverse = function (x) {
  const big = x > 0 ? 1 : -1;
  const absNum = Math.abs(x);
  let reverse = Array.from(absNum.toString()).reverse().join("");
  if (reverse > Math.pow(2, 31)) {
    return 0;
  }
  return reverse * big;
};

// 解法二思路: 思路一的换汤不换药，取出末尾字符并置于首位
var reverse = function (x) {
  const big = x > 0 ? 1 : -1;
  let absNum = Math.abs(x);
  let reverse = [];
  while (absNum != 0) {
    const yu = absNum % 10;
    reverse.push(yu);
    absNum = (absNum - yu) / 10;
  }
  const res = reverse.join("");
  if (res > Math.pow(2, 31)) {
    return 0;
  }
  return res * big;
};