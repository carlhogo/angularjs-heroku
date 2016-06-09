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

app.controller('ReviewController',['$http', function ($http) {
  var vm = this;
  $http.get('http://localhost:8080/prueba2/calculator/square?input=25').success(function(data){
    vm.products = data;
    console.log(data);
  });

}]);
