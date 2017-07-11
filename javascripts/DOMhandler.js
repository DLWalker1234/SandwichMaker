console.log("DOM");


var finalSandwichPrice = 0;   
var selectedTopping;          

var sandwich = document.getElementById("sandwich");
var moneyTotal = document.getElementById("total");  

var addWheat = document.getElementById("WheatBtn"),
    addItalian = document.getElementById("ItalianBtn"),
    addPump = document.getElementById("PumpernickelBtn");

var wheats = 0,
    Italian = 0,
    Pumpernickel = 0,
    RoastBeef = 0,
    Ham = 0,
    Turkey = 0,
    Swiss = 0,
    PepperJack = 0,
    Mozerella = 0,
    Mustard = 0,
    Mayo = 0,
    Dressing = 0,
    Tomato = 0,
    Pickel = 0,
    Lettuce = 0;



addWheat.addEventListener("click", function(event) {
  selectedTopping = event.target.value;
  console.log(selectedTopping);
  wheats += 1;
  console.log("number of wheat", wheats)
  

  let breads = SandwichMaker.getBreadPrices("Wheat");
  console.log(breads)
  sandwich += selectedTopping, wheats;
  console.log(sandwich);
  finalSandwichPrice += breads;
  console.log(finalSandwichPrice);

  sandwich.innerHTML = selectedTopping;
  moneyTotal.innerHTML = finalSandwichPrice;
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




  
 