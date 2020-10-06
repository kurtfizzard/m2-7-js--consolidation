// Exercise 2
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  ellicia: "panda express",
  fertrude: "gummy bears",
  glinda: "pie",
  hethel: "not applicable",
  irsula: "rum cake",
  judas: "revenge (served cold)",
  khloe: "pie",
  lyndon: "easter eggs",
  minda: "dessert",
};

// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

// Your function should work with both objects and any other objects of the same shape.

function sortByPopularity(obj) {
  // create an array consisting of the values
  let dessertArray = Object.values(obj);
  // create an object with key/value pairs that correspond to name of the dessert and the count
  let dessertCount = dessertArray.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
  console.log(dessertCount);
  // create an empty array
  let dessertRank = [];
  // create a variable for the names of desserts
  let dessertNames = Object.keys(dessertCount);
  // create a variable for the count of each dessert
  let dessertCounts = Object.values(dessertCount);
  // for each element in the names array, push the name and the corresponding count (index) from the counts array
  dessertNames.forEach((item, index) => {
    // create a variable and have it equal the dessert name
    let name = item;
    // create a variable and have it equal the count
    let count = dessertCounts[index];
    // push both the names and counts into an array, each key/value pair as an object
    dessertRank.push({ name, count });
  });
  // sort the array of objects based on the value
  dessertRank.sort((item1, item2) => {
    // if the first item's count is more than the second's, start of the array
    if (item1.count > item2.count) {
      return -1;
      // otherwise, end of the array
    } else {
      return 1;
    }
  });
  // create a new variable that will be an array, taking the keys from the sorted array of objects
  let finalArray = dessertRank.map((obj) => {
    return obj.name;
  });
  return finalArray;
}

// Verification via console.log()
console.log(
  "Popular desserts in Group A:",
  sortByPopularity(favoriteDessertsGroupA)
);
console.log(
  "Popular desserts in Group B:",
  sortByPopularity(favoriteDessertsGroupB)
);

// Test your code: "yarn test exercise-2"

module.exports = sortByPopularity;
