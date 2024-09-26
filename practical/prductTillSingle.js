function normal(...args) {
  const added = args.reduce((acc, num) => acc + num, 0);
  const digits = added.toString().split("").map(Number);
  const mul = digits.reduce((acc, num) => acc * num, 1);
  if (mul > 9) {
    return normal(mul);
  }
  return mul;
}
console.log(normal(16, 28));
