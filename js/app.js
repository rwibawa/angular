(function() {
	var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = {
			name: "Dodecahedron",
			price: 2.95,
			description: "Some gems have hidden qualities beyond their luster, beyond their shine.. Dodecahedron is one of them",
			canPurchase: true,
			soldOut: true
	}
})();
