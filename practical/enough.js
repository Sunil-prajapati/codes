function itemsPurchased(store, wallet) {
  wallet = parseFloat(wallet.replace(/[$,]/g, ""));
  const sortedObject = Object.keys(store)
    .sort()
    .reduce((acc, key) => {
      acc[key] = parseFloat(store[key].replace(/[$,]/g, ""));
      return acc;
    }, {});

  let newObject = {};
  for (const key in sortedObject) {
    const price = sortedObject[key];
    if (price <= wallet) {
      wallet -= price;
      newObject[key] = store[key];
    }
  }
  return newObject;
}

console.log(
  itemsPurchased(
    {
      Water: "$1",
      Bread: "$3",
      TV: "$1,000",
      Fertilizer: "$20",
    },
    "$300"
  )
);
