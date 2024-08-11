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
console.log(finalObj);
