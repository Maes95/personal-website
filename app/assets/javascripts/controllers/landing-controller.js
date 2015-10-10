angular.module('app')
.controller('LandingController', ['$scope' ,function($scope){
  $scope.items = [];
  for (var i = 0; i < 4; i++) {
    $scope.items.push(i);
  }
}]);
