var isValid = function (s) {
  let newArray = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      newArray.push(s[i]);
    } else if (s[i] === ")" && newArray.pop() !== "(") {
      return false;
    } else if (s[i] === "]" && newArray.pop() !== "[") {
      return false;
    } else if (s[i] === "}" && newArray.pop() !== "{") {
      return false;
    }
  }
  return true;
};
console.log(isValid("([])"));
