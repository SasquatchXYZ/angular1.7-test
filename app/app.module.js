'use strict';

// Declare app level module which depends on views, and core components
angular.module('testApp', [
  'ngRoute',
  'tableView',
  'cardsView',
  'testApp.version'
]);
/*
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/table-view'});
}]);
*/
