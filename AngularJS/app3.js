var myApp = angular.module("myModule",[]);

myApp.controller("myController1", function($scope){
    var employees = [
        {firstName:"John",lastName:"Smith",gender:"Male", salary:55000},
        {firstName:"John",lastName:"Smith",gender:"Male", salary:55000},
        {firstName:"John",lastName:"Smith",gender:"Male", salary:55000},
        {firstName:"John",lastName:"Smith",gender:"Male", salary:55000},
        {firstName:"John",lastName:"Smith",gender:"Male", salary:55000},
    ]
    $scope.employees = employees
})
