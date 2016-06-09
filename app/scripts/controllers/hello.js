(function()
{

  'use strict';

  /**
   * @ngdoc function
   * @name angula)rjsHerokuApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularjsHerokuApp
   */
  var app = angular.module('angularjsHerokuApp', [])

  app.controller('HelloCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  
  function Hello($scope, $http){
    $http.get('https://calm-fjord-47282.herokuapp.com/prueba/home/saludo').
      success(function (data) {
        $scope.greetting = data;
    })
  }
  
})
