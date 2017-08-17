(function(){
    angular.module('fileManager')
           .controller('loginCtrl',['auth','$scope','$location','$rootScope','$firebaseArray',function(auth, $scope, $location, $rootScope, $firebaseArray){
               $scope.signIn = function(){
                 auth.$signInWithEmailAndPassword($scope.email, $scope.password)
                    .then(function(firebaseUser) {
                        console.log(firebaseUser);
                        $location.path('/upload');
                    })
                    .catch(function(error) {
                        console.error("Authentication failed:", error);
                    });
               }
                 $scope.signUp = function(){
                 auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
                    .then(function(firebaseUser) {
                        $scope.userRef = rootRef.child(firebaseUser.uid);
                        console.log("Signed in as:", firebaseUser.uid);
                        $location.path('/upload');
                        console.log($scope.userRef);
                    })
                    .catch(function(error) {
                        console.error("Authentication failed:", error);
                    });
               }

           }]);
})();