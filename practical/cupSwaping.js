function cupSwapping(swaps) {
  let BallPosition = "B";
  for (let i = 0; i < swaps.length; i++) {
    if (swaps[i].includes(BallPosition)) {
      BallPosition = swaps[i].replace(BallPosition, "");
    }
  }
  return BallPosition;
}
const result = cupSwapping(["BC", "CB", "CA", "BA"]);
console.log(result);
