(function(){
	var app = angular.module('store-directives', []);

	// Refactor TabController into a custom directive
	app.directive('productTabs', function(){
		return {
			restrict: 'E',
			templateUrl: "includes/product-tabs.html",
			controller: function(){
				this.tab = 1;
				
				this.setTab = function(newValue) {
					this.tab = newValue;
				}
				
				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'tab'
		};
	});
	
	app.directive('productDescriptions', function(){
		return {
			retrict: 'E',
			templateUrl: "includes/product-reviews.html"
		};
	});
	
	app.directive('productSpecs', function(){
		return {
			retrict: 'A',
			templateUrl: "includes/product-specs.html"
		};
	});
	
})();