'use strict';

/**
 * @ngdoc overview
 * @name tischkickerFrontendApp
 * @description
 * # tischkickerFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('tischkickerFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl',
        controllerAs: 'configCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
