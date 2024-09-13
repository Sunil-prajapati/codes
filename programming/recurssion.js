let user = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  address: {
    personal: {
      city: "Amritsar",
      State: "Punjab",
    },
    office: {
      city: "New York city",
      State: "New York",
    },
  },
};

let finalObj = {};
const recurssionMagic = (obj, parentName) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      recurssionMagic(obj[key], parentName + "_" + key);
    } else {
      finalObj[parentName + "_" + key] = obj[key];
    }
  }
};
recurssionMagic(user, "user");

// ============ Is the Input Factorial of an Integer? ===========
function isFactorial(num) {
  let factorial = 1;
  let i = 1;
  while (factorial <= num) {
    if (factorial === num) {
      return true;
    }
    factorial *= i;
    i++;
  }
  return false;
}
isFactorial(5);

// ===== palindrome =================================
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}
const result = isPalindrome("adieu");
console.log(result);
