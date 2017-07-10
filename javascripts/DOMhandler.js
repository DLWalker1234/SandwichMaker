console.log("DOM");


var finalSandwichPrice = 0;   
var selectedTopping;          


var breadChooser = document.getElementById("breads"),
    meatChooser = document.getElementById("meats"),
    cheeseChooser = document.getElementById("cheeses"),
    condimentChooser = document.getElementById("condiments"),
    veggieChooser = document.getElementById("veggies"),
    sandwich = document.getElementById("finalSandwich");  

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
  console.log("meatified")
  selectedTopping = event.target.value;

  let breads = SandwichMaker.getBreadPrices();
  finalSandwichPrice += breads; 
})
  
 