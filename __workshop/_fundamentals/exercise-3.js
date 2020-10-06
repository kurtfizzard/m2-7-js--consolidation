// Exercise 3
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

// Write a function that accepts an object (like above) and returns a new object with the data sorted
// and classified like so:

// {
//   'name of dessert': ['name1', 'name2']
// }

// Expected output for groupByValue(favoriteDessertsGroupB) is
// {
//   'pie': [ 'alice', 'glinda', 'khloe' ],
//   'deep-fried mars bar': [ 'betty' ],
//   'gummy bears': [ 'colin', 'fertrude' ],
//   'child tears': [ 'damien' ],
//   'panda express': [ 'ellicia' ],
//   'not applicable': [ 'hethel' ],
//   'rum cake': [ 'irsula' ],
//   'revenge (served cold)': [ 'judas' ],
//   'easter eggs': [ 'lyndon' ],
//   'dessert': [ 'minda' ]
// }
// let myObject = { pie: ["alice", "glinda", "khloe"] };
// let keyName = "pie";
// myObject[keyname] = ["alice", "glinda", "khloe"];
// myObject[keyname].push("bob");
// convert the object entries into an array
// loop over the array evaluating the values

function groupByValue(obj) {
  // creat a new object
  let desserts = {};
  // create an array with the keys from the original object
  let keysArray = Object.keys(obj);
  // for each key
  keysArray.forEach((personName) => {
    // declare a new variable which is equal to the original object's values
    let dessertName = obj[key];
    // if the dessert is present in the object
    if (desserts[dessertName]) {
      // push the to it's value array
      desserts[dessertName].push(personName);
    } else {
      // make a new value array with the name in it
      desserts[dessertName] = [personName];
    }
  });
  // return the object
  return desserts;
}
// let nameArray = Object.keys(obj);
// console.log(dessertArray);
// console.log(nameArray);

// dessertArray.forEach((type) => {});

// let pairsArray = Object.entries(obj);

// let newArray = pairsArray.forEach((pair) => {
//   return pair[1], pair[0];
// });
// console.log(newArray);

//   entries
// reverse
// fromEntries

// Verification via console.log()
console.log("Group A", groupByValue(favoriteDessertsGroupA));
// console.log("Group B", groupByValue(favoriteDessertsGroupB));

// Test your code: "yarn test exercise-3"

module.exports = groupByValue;
