// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"Roastbeef": 1.00,
					"Ham": 2.00,
					"Turkey": 3.00}

  // Augment the original object with another method
  maker.addMeatPrices = function(meat) {
    return meatPrices[meat];
  };
  maker.getMeatPrices = function() {
  	return meatPrices
  };
  
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);