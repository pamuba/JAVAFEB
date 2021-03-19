var app = angular.module('app',[]);
        
app.controller('emp',['$scope','$rootScope', function($scope, $rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.s = 0;

    $scope.calcSum = function(){
        $scope.s = $scope.a + Number($scope.b);
    }
}]);

var btnClick = function(){
    var $scope = angular.element($("#div1")).scope()
    $scope.s = $scope.a + Number($scope.b);
    $scope.$apply()
}