console.log("VEGGIES");

var SandwichMaker = (function(maker) {

	var veggiePrices = {"Tomato": 1.00,
						"Pickel": 2.00,
						"Lettuce": 3.00};

	//setter					
	maker.addVeggie = function(veggie) {
		return veggiePrices[selectedVeggie];
	};
	//getter
	maker.getVeggie = function() {
		return veggiePricea	
	};

	return maker;
})(SandwichMaker || {});