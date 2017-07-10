console.log("BREAD")

var SandwichMaker = (function(maker) {
  
  var breadPrices= {
                    "Wheat": 1.00, 
                    "Italian": 2.00, 
                    "Pumpernickel": 3.00
                    };

  //setter
  maker.addBreadPrices = function(bread) {
    return breadPrices[bread];
  };
  //getter
  maker.getBreadPrices = function () {
    return breadPrices
  };

  return maker;
})(SandwichMaker || {});
