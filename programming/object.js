function mostExpensive(jewelry) {
  let maxPrice = 0;
  let mostExpensiveItem = "";
  for (const [item, price] of Object.entries(jewelry)) {
    if (price > maxPrice) {
      maxPrice = price;
      mostExpensiveItem = item;
    }
  }
  return { [mostExpensiveItem]: maxPrice };
}

const result = mostExpensive({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
});
// ======= reduce with array
function chosenWine(wine) {
  const result = wine.reduce(
    (cheapest, current) => {
      if (current.price < cheapest.price) {
        return current;
      }
      return cheapest;
    },
    { name: "", price: Infinity }
  );

  return result;
}

const result1 = chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 },
]);
console.log(result1);
