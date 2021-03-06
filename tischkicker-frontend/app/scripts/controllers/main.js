'use strict';

/**
 * @ngdoc function
 * @name tischkickerFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tischkickerFrontendApp
 */
angular.module('tischkickerFrontendApp')
    .controller('MainCtrl', function ($scope, GoalsService) {
        $scope.scoreboard = {
            heim: {
                teamname: 'Die Krabbler',
                goal: '4',
                speed: '233 km/h'
            },
            gast: {
                teamname: 'Sandy & Co.',
                goal: '10',
                speed: '120 km/h'
            }
        };
    
        function getGoals() {
            GoalsService.get({}, function (response) {
                console.log(response);
                console.log(JSON.stringify(response));
            });
        }
    
        getGoals();
    
    });