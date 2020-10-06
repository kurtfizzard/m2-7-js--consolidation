let year = document.getElementById("year");
// set default year to 2018
year.innerText = "2018";
let buttonOne = document.getElementById("button18");
let buttonTwo = document.getElementById("button19");
// create an array of our numbers so that assign them each an event listener
let numbers = Array.from(document.getElementsByClassName("number"));
let hoverSuggestion = document.getElementById("hover-suggestion");
let largeNumber = document.getElementById("large-number");
// have the large number display none by default
largeNumber.style.display = "none";
let foodItem = document.getElementById("food-item");
// have the food item display none by default
foodItem.style.display = "none";

// buttons that change the year in header
buttonOne.addEventListener("click", function () {
  year.innerText = "2018";
});
buttonTwo.addEventListener("click", function () {
  year.innerText = "2019";
});

// numbers on hover
numbers.forEach((number, index) => {
  number.addEventListener("mouseover", function () {
    // hide the hover-suggestion message
    hoverSuggestion.style.display = "none";
    // assign the large number an inner text of the current number's index + 1
    largeNumber.innerText = `${index + 1}`;
    // the large number is hidden by default, so display it
    largeNumber.style.display = "flex";
    // assign the food item an inner text by referencing the top ten list [array][object based on array index].key
    foodItem.innerText = topTenList[year.innerText][index].name;
    // the food item is hidden by default, so display it
    foodItem.style.display = "flex";
  });
  number.addEventListener("mouseout", function () {
    // display the hover suggestion again
    hoverSuggestion.style.display = "flex";
    // hide both the large number and food item again
    largeNumber.style.display = "none";
    foodItem.style.display = "none";
  });
});
