

  'use strict';

  /**
   * @ngdoc function
   * @name angula)rjsHerokuApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularjsHerokuApp
   */
  var app = angular.module('angularjsHerokuApp', []);

  app.controller('HelloCtrl', ['$http', function ($http) {
    var vm = this;
    $http.get('https://calm-fjord-47282.herokuapp.com/prueba/home/saludo').
      success(function (data) {
        vm.greetting = data;
      console.log(data);
    });
  }]);
