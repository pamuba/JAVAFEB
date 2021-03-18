var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Ben", gender: "Male", city: "London", salary: 55000 },
                { name: "Sara", gender: "Female", city: "Chennai", salary: 68000 },
                { name: "Mark", gender: "Male", city: "Chicago", salary: 57000 },
                { name: "Pam", gender: "Female", city: "London", salary: 53000 },
                { name: "Todd", gender: "Male", city: "Chennai", salary: 60000 }
            ];

            $scope.employees = employees;
        });