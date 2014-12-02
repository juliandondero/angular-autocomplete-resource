'use strict';

/**
 * @ngdoc service
 * @name testAutocompleteApp.testService
 * @description
 * # testService
 * Factory in the testAutocompleteApp.
 */
angular.module('testAutocompleteApp')
  .factory('TestService', ['$resource',function ($resource) {
    
    // Public API here
    return $resource('test.json',{},{query:{method: 'GET',isArray:true}});
  }]);
