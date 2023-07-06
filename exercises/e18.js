/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;
  let filtered = asteroids.filter(asteroid => asteroid.discoveryYear)
  .map(asteroid => asteroid.discoveryYear);
  
  function maxBy(array, cb) {
    if (array.length === 0) {
      return undefined;
    }
  
    let maxItem = undefined;
    let maxValue = cb(array[0]);
  
    for (let item of array) {
      let value = cb(item);
      if (value > maxValue) {
        maxItem = item;
        maxValue = value;
      }
    }
    return maxItem;
  } 
  let yearCount = maxBy(filtered, year => {
    let count = filtered.filter(y => y === year).length;
    return count;
  });
  return yearCount;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
