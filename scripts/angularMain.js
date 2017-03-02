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

	app.controller('sdubeyController', function($scope){
	    $scope.viewAbout = true;
		$scope.viewResume = false;
		$scope.viewCarousel = false;
		$scope.hidepgUpLink = true;
		$scope.hidepgDownLink = false;
		console.log('viewAbout: ' + $scope.viewAbout);
		console.log('viewResume: ' + $scope.viewResume);

		$scope.menuClick = function(item) {
			switch(item){
				case 1:
				    $scope.viewAbout = true;
					$scope.viewResume = false;
					$scope.viewCarousel = false;
					console.log('item clicked: ' + item);
					break;
				case 2:
					$scope.viewAbout = false;
					$scope.viewResume = true;
					$scope.viewCarousel = false;
					console.log('item clicked: ' + item);
					break;
				default:
					$scope.viewAbout = true;
					$scope.viewResume = false;
					$scope.viewCarousel = false;
					console.log('default case happened');
					break;
			}
		};

		$scope.aboutPgDownClick = function() {
			console.log('pgDownLink clicked');
			if ($('#contOne').hasClass('active')) {
				$('#contOne').removeClass('active').fadeOut('5000');
				$('#contTwo').addClass('active').fadeIn('10000');
				$scope.hidepgUpLink = false;
			} else if($('#contTwo').hasClass('active')) {
				$('#contTwo').removeClass('active').fadeOut('5000');
				$('#contThree').addClass('active').fadeIn('10000');
				$scope.hidepgDownLink = true;
			} 
		};
		$scope.aboutPgUpClick = function() {
			console.log('pgDownLink clicked');
			if ($('#contTwo').hasClass('active')) {
				$('#contTwo').removeClass('active').fadeOut('5000');
				$('#contOne').addClass('active').fadeIn('10000');
				$scope.hidepgUpLink = true;
			} else {
				$('#contThree').removeClass('active').fadeOut('5000');
				$('#contTwo').addClass('active').fadeIn('10000');
				$scope.hidepgDownLink = false;
			}
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
			templateUrl: 'angularViews/carousel.html'
		};
	});
	app.directive('sdAbout', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/aboutMe.html'
		};
	});

})();