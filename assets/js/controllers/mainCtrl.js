(function(){
	angular.module('fileManager')
		   .controller('mainCtrl',['$scope', '$mdSidenav','$location','$route','$timeout',function($scope, $mdSidenav, $location, $route, $timeout) {
		   	
		   	$scope.toggleSidenav = function() {
				$mdSidenav('left').toggle();
			}

			$scope.goTo = function(url){
				$location.path(url);
				$mdSidenav('left').close();
			}

		/*	$scope.logout = function(){
				auth.$signOut();
				$timeout(function() {
						$location.path('/');
						$route.reload();
					}, 2000);
			}

			auth.$onAuthStateChanged(function(firebaseUser) {
				if (firebaseUser) {
					$scope.firebaseUser = firebaseUser;
					console.log("Signed in as:", firebaseUser.uid);
				} else {
					console.log("Signed out");
				}
			});*/
		   }]);
})();