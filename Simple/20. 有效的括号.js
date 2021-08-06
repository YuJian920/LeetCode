// 思路: 栈，符号起始推入栈，符号结尾查找栈，找到就删除继续下一个
var isValid = function (s) {
  let stack = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i in s) {
    if (["{", "[", "("].indexOf(s[i]) !== -1) {
      stack.push(s[i]);
    } else {
      const pop = stack[stack.length - 1];
      if (s[i] === map[pop]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;
  return true;
};
