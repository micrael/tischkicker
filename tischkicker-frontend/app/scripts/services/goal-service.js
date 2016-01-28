'use strict';

angular.module('tischkickerFrontendApp')
    .service('GoalsService', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/goals', {}, {});
  }]);