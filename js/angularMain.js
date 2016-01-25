(function() {
	var app = angular.module('sdPortfolio', ['ngAnimate']);

	app.controller('TabController', function(){
	    this.tab = 1;

	    this.setTab = function(newValue){
	      this.tab = newValue;
	    };

	    this.isSet = function(tabName){
	      return this.tab === tabName;
	    };
	});

	app.directive('sdResume', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/resumeContent.html'
		};
	});
	app.directive('sdSlider', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/sliderContent.html'
		};
	});
	app.directive('sdContact', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/contactMe.html'
		};
	});

})();