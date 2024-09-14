function areStringsEqual(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let count1 = {};
  let count2 = {};
  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
  }
  for (let char of str2) {
    count2[char] = (count2[char] || 0) + 1;
  }
  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }
  return true;
}
console.log(areStringsEqual("hello", "Hello"));
// ================
const arr = [
  { id: 1, name: "sunil" },
  { id: 2, name: "anil" },
  { id: 3, name: "superman" },
  { id: 2, name: "anil" },
];

function filter(arr) {
  const uniqueArr = arr.filter(
    (obj, index, self) =>
      index === self.findIndex((object) => object.id === obj.id)
  );
  return uniqueArr;
}

const result = filter(arr);
console.log(result);
