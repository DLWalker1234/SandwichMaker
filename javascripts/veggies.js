console.log("VEGGIES");

var SandwichMaker = (function(maker) {

	var veggiePrices = {"Tomato": 1.00,
						"Pickel": 2.00,
						"Lettuce": 3.00};

	//setter					
	maker.addVeggiePrices = function(veggie) {
		return veggiePrices[veggie];
	};
	//getter
	maker.getVeggiePrices = function() {
		return veggiePricea	
	};

	return maker;
})(SandwichMaker);