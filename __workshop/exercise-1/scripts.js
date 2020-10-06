let year = document.getElementById("year");
year.innerText = "2018";
let currentYear = year.innerText;
let buttonOne = document.getElementById("button18");
let buttonTwo = document.getElementById("button19");
let number = document.querySelectorAll("number");
let largeNumber = document.getElementById("large-number");
largeNumber.style.display = "none";
let foodItem = document.getElementById("food-item");
foodItem.style.display = "none";

// buttons that change the year in header

buttonOne.addEventListener("click", function () {
  year.innerText = "2018";
});
buttonTwo.addEventListener("click", function () {
  year.innerText = "2019";
});

// numbers on hover

number.addEventListener("mouseover", function () {
  largeNumber.innerText = "NUMBER";
  largeNumber.style.display = "block";
  foodItem.innerText = topTenList[year.innerText][number.innerText].id;
  foodItem.style.display = "block";
});
