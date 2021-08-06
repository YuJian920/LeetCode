// 思路: 转为数组两头比较
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let list = Array.from(x.toString());
  let startIndex = 0;
  let endIndex = list.length - 1;

  while (startIndex <= endIndex) {
    if (list[startIndex] != list[endIndex]) {
      return false;
    }
    startIndex += 1;
    endIndex -= 1;
  }

  return true;
};
