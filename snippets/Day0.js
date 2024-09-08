function availableSpots(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (num % 2 === 0) {
      if (current % 2 === 0 || next % 2 === 0) {
        count++;
      }
    } else {
      if (current % 2 !== 0 || next % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(availableSpots([5, 5, 5, 8, 8, 5, 5, 5, 5], 32));
