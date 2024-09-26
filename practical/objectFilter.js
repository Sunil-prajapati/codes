function simplifyList(list) {
  let newObj = {};
  for (let item of list) {
    const key = `${item.brand}-${item.name}`;
    newObj[key] = (newObj[key] || 0) + 1;
  }
  let result = [];
  for (let [key, count] of Object.entries(newObj)) {
    const [brand, name] = key.split("-");
    result.push({ brand, name, count });
  }
  return result;
}

// ====== only filer without count
function simplifyList(list) {
  const seen = new Set();
  return list.filter((item) => {
    const key = `${item.brand}-${item.name}`;
    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }
    return false;
  });
  return seen;
}

console.log(
  simplifyList([
    { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
    { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
    { brand: "Urban Decay", name: "Naked Honey Pallete" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  ])
);
