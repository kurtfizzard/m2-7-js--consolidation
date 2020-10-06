// Exercise 1
//
// Write a function that will transform the inputData object into a new shape (As provided below.)

const inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

function transformData(data) {
  // create a new address object with the required values
  let addressObject = {
    streetAddress: data.address1,
    city: data.addressCity,
    state: data.addressState,
    country: data.addressCountry,
  };
  // create a superpowers array
  let superpowersArray = [];
  // if there is a super power, push it to the array
  if (data.superpower1) {
    superpowersArray.push(data.superpower1);
  }
  // if there is another super power, push it to the array
  if (data.superpower2) {
    superpowersArray.push(data.superpower2);
  }
  // create a relationships array
  let relationshipsArray = [];
  // check to see if there is a mother
  if (data.motherName) {
    // check to see if the mother has super powers
    let motherSuperpowerArray = [];
    // if the mother has a power, push it to the array
    if (data.motherSuperpower1) {
      motherSuperpowerArray.push(data.motherSuperpower1);
    }
    // if the mother has another power push it to the array
    if (data.motherSuperpower2) {
      motherSuperpowerArray.push(data.motherSuperpower2);
    }
    // push the mother object to the relationships array
    relationshipsArray.push({
      type: "mother",
      name: data.motherName,
      age: data.motherAge,
      status: data.motherStatus,
      superpowers: motherSuperpowerArray,
    });
  }
  // check to see if there is a best friend
  // if (data.bestFriendName) {
  //   // check to see if the best friend has super powers
  //   let bestFriendSuperpowerArray = [];
  //   // if the best friend has a power, push it to the array
  //   if (data.bestFriendSuperpower1) {
  //     bestFriendSuperpowerArray.push(data.bestFriendSuperpower1);
  //   }
  //   // if the best friend has another power, push it to the array
  //   if (data.bestFriendSuperpower2) {
  //     bestFriendSuperpowerArray.push(data.bestFriendSuperpower2);
  //   }
  //   // push the best friend object to the relationships array
  //   relationshipsArray.push({
  //     type: "bestfriend",
  //     name: data.bestFriendName,
  //     age: data.bestFriendAge,
  //     status: data.bestFriendStatus,
  //     superpowers: bestFriendSuperpowerArray,
  //   });
  // }
  // check to see if there is a girlfriend
  if (data.girlfriendName) {
    // check to see if the girlfriend has super powers
    let girlfriendSuperpowerArray = [];
    // if the girlfriend has a power, push it to the array
    if (data.girlfriendSuperpower1) {
      girlfriendSuperpowerArray.push(data.girlfriendSuperpower1);
    }
    // if the girlfriend has another power, push it to the array
    if (data.girlfriendSuperpower2) {
      girlfriendSuperpowerArray.push(data.girlfriendSuperpower2);
    }
    // push the girlfriend object to the relationships array
    relationshipsArray.push({
      type: "girlfriend",
      name: data.girlfriendName,
      age: data.girlfriendAge,
      status: data.girlfriendStatus,
      superpowers: girlfriendSuperpowerArray,
    });
  }
  let newData = {
    name: data.name,
    age: data.age,
    status: data.status,
    address: addressObject,
    superpowers: superpowersArray,
    relationships: relationshipsArray,
  };
  return newData;
}

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };
