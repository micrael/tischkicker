'use strict';

/**
 * @ngdoc function
 * @name tischkickerFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tischkickerFrontendApp
 */
angular.module('tischkickerFrontendApp')
    .controller('MainCtrl', function ($scope) {
        $scope.scoreboard = {
            heim: {
                teamname: 'Die Krabbler',
                goal: '4',
                speed: '233 kmh'
            },
            gast: {
                teamname: 'Sandy & Co.',
                goal: '10',
                speed: '120 kmh'
            }
        };
    });