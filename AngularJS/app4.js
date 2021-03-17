var myApp = angular
        .module("myModule",[])
        .controller("myController1", function($scope){
        var technologies = [
            {name:"Java",likes:0, dislikes:0},
            {name:"React",likes:0, dislikes:0},
            {name:"Angular",likes:0, dislikes:0},
            {name:"Vue",likes:0, dislikes:0},
            {name:"Express",likes:0, dislikes:0},
        ]
        $scope.technologies = technologies

        $scope.incrementLikes = function(tech){
            tech.likes++;
        }

        $scope.decrementLikes = function(tech){
            tech.dislikes++;
        }
})
