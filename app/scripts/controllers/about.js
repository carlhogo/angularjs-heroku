'use strict';

/**
 * @ngdoc function
 * @name angularjsHerokuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsHerokuApp
 */
var app = angular.module('angularjsHerokuApp',[]);

app.controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

