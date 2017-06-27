console.log("CHEESE");

var SandwichMaker = (function(maker) {
  
  var cheesePrices= {"Swiss": 1.00, 
                    "PepperJack": 2.00, 
                    "Mozerelaa": 3.00
                  };

  //Setter?
  maker.addCheesePrices = function(cheese) {
    return cheesePrices[cheese];
  };
//Getter?
  maker.getCheesePrices = function () {
    return cheesePrices
  };

 
  return maker;
})(SandwichMaker);
