(function(){
	angular.module('fileManager',['ngRoute', 'ngMaterial', 'ngMdIcons', 'ng-fx', 'ngAnimate','ngFileUpload','base64','ngSanitize'])
	.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
			$routeProvider.when('/', {
				templateUrl: 'views/upload.html',
				controller: 'uploadCtrl'
			})
			.when('/upload', {
				templateUrl: 'views/upload.html',
				controller: 'uploadCtrl',
				// resolve: {
				// 		userFolder : function(auth, rootRef, $firebaseStorage) {
				// 			return auth.$requireSignIn();
				// 				}
				// 		}
			})
			.when('/all', {
				templateUrl: '/views/allFiles.html',
				controller: 'allFilesCtrl'
			})
			.otherwise({
        		redirectTo: '/'
      		});
			$mdThemingProvider.theme('default')
				.primaryPalette('blue-grey')
				.accentPalette('amber');
		}]);
})();