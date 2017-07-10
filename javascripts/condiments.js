console.log("CONDIMENTS");

var SandwichMaker = (function(maker) {

	var condimentsPrices = {
							"Mustard": 1.00,
							"Mayo": 2.00,
							"Dressing": 3.00
							};

	//setter
	maker.addCondimentsPrices = function(condiment) {
		return condimentPrices[condiment];
	};
	//getter
	maker.getCondimentPrices = function() {
		return condimentPrices
	};

	return maker;
})(SandwichMaker || {});