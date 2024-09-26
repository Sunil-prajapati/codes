function combine(str1, str2) {
  let newArray = [];
  const maxLength = Math.max(str1.length, str2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) {
      newArray.push(str1[i]);
    }
    if (i < str2.length) {
      newArray.push(str2[i]);
    }
  }
  return newArray.join("");
}
console.log(combine("abcd", "123445678"));
