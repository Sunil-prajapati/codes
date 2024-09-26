function doubleSwap(str, c1, c2) {
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == c1) {
      newArray.push(c2);
    } else if (str[i] == c2) {
      newArray.push(c1);
    } else {
      newArray.push(str[i]);
    }
  }
  return newArray.join("");
}

function canFindBigrams(bigrams, words) {
  const wordMap = new Map();

  for (const word of words) {
    for (let i = 0; i < word.length - 1; i++) {
      const bigram = word.slice(i, i + 2);
      wordMap.set(bigram, (wordMap.get(bigram) || 0) + 1);
    }
  }

  for (const bigram of bigrams) {
    if (!wordMap.has(bigram)) {
      return false;
    }
  }

  return true;
}
console.log(
  canFindBigrams(["at", "be", "th", "au"], ["beautiful", "the", "hat"])
);

products.slice(
  page * limitDataToShow - limitDataToShow,
  page * limitDataToShow
);

[...Array(products.length / limitDataToShow)].map(_, i);

selectPage(i + 1);
