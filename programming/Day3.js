var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    profit = Math.max(profit, prices[i] - minPrice);
  }
  return profit;
};

var isPalindrome = function (s) {
  let removedAlphaNumeric = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reversed = "";
  for (let i = removedAlphaNumeric.length - 1; i >= 0; i--) {
    reversed += removedAlphaNumeric[i];
  }
  // let reversed = removedAlphaNumeric.split("").reverse().join("");
  if (removedAlphaNumeric === reversed) {
    return true;
  }
  return false;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
