/** Author : Chidume David */
'use strict';
var app = angular.module("MyTwitterApp", []);

app.controller('MyController', function($scope) {
    $scope.user = {}
    $scope.name = 'nnamdi'
    $scope.tweets = [
        { name: 'nnamdi', tweet: 'setting up my twiter' },
        { name: 'kc', tweet: 'hi, we are using angularjs' }
    ]

    $scope.tweet = function() {
        /**Use of Spread Operator prevents Mutation which slows down Javascript execution */
        $scope.tweets = [$scope.user, ...$scope.tweets]
            //$scope.tweets.push($scope.user)
        $scope.user = {}
    }
});