app.controller("MainController", ['$scope', function($scope) {
  $scope.title = "Hello World";

  $scope.count = 3;

  $scope.increase = function() {
    $scope.count += 1;
  };

  $scope.decrease = function() {
    $scope.count -= 1;
  };



}]);
