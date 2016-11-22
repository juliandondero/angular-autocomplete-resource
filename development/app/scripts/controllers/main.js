'use strict';

/**
 * @ngdoc function
 * @name testAutocompleteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAutocompleteApp
 */
angular.module('testAutocompleteApp')
  .controller('MainCtrl', function ($scope) {

    $scope.quiteItem=function(){
    //  alert("quite!");
    };

    $scope.condiciones={
      required:true,
      readonly:true
    };

    $scope.emptyTest=function(){
        alert("busqueda sin resultados");
    };
  });
