function numberSquares(n) {
  let totalSquares = 0;
  for (let k = 1; k <= n; k++) {
    totalSquares += (n - k + 1) ** 2;
  }
  return totalSquares;
}
