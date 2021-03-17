var myApp = angular.module("myModule",[]);

myApp.controller("myController1", function($scope){
    $scope.message = "Hello World from 2nd Controller"
    var employee = {
        firstName:"John",
        lastName:"Smith",
        gender:"Male"
    }
    //attach the ob to the scope
    $scope.employee = employee
})
