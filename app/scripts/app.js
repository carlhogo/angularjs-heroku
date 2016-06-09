'use strict';

/**
 * @ngdoc overview
 * @name angularjsHerokuApp
 * @description
 * # angularjsHerokuApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsHerokuApp', [
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
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'HelloCtrl',
        controllerAs: 'Hello'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
