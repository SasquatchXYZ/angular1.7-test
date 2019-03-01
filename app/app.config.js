'use strict';

angular
  .module('testApp')
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/table', {
          template: '<table-view></table-view>'
        })
        .when('/cards', {
          template: '<cards-view></cards-view>'
        })
        .otherwise('/table');
    }
  ]);
