console.log("DOM");


var finalSandwichPrice = 0;   
var selectedTopping;          


var breadChooser = document.getElementById("breads"),
    meatChooser = document.getElementById("meats"),
    cheeseChooser = document.getElementById("cheeses"),
    condimentChooser = document.getElementById("condiments"),
    veggieChooser = document.getElementById("veggies");

var sandwich = document.getElementById("sandwich");
var moneyTotal = document.getElementById("total");  

var addWheat = document.getElementById("WheatBtn"),
    addItalian = document.getElementById("ItalianBtn"),
    addPump = document.getElementById("PumpernickelBtn");


// breadChooser.addEventListener("click", function(event) {
//   selectedTopping = event.target.value;
//   console.log(selectedTopping)
//   if(selectedTopping === addWheat) {
//     console.log("wheat bitch")
//   }

// });

addWheat.addEventListener("click", function(event) {
  selectedTopping = event.target.value;
  console.log(selectedTopping)
  var wheats = 0;

  let breads = SandwichMaker.getBreadPrices("Wheat");
  console.log(breads)
  finalSandwichPrice += breads;
  console.log(finalSandwichPrice);

  sandwich.innerHTML = selectedTopping;
  moneyTotal.innerHTML += finalSandwichPrice;
});

addItalian.addEventListener("click", function(event) {
  selectedTopping = event.target.value;
  console.log(selectedTopping);

  let breads = SandwichMaker.getBreadPrices("Italian");
  console.log(breads)
  finalSandwichPrice += breads;
  console.log(finalSandwichPrice);

  sandwich.innerHTML = selectedTopping;
  moneyTotal.innerHTML += finalSandwichPrice;
});




  
 