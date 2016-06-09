
'use strict';

/**
 * @ngdoc function
 * @name angularjsHerokuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsHerokuApp
 */
angular.module('angularjsHerokuApp')
  .controller('AboutCtrl', ['$http', function ($http) {
    console.log('paso1');
    var vm = this;
    console.log('paso2');
    $http.get('https://calm-fjord-47282.herokuapp.com/prueba/home/saludo').
      success(function(data){
      console.log('paso3');
        vm.saludo = data;
      console.log(data);
    });
  }]);

