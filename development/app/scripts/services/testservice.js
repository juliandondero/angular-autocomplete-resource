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
    return $resource('test_empty.json',{},
    	{
    		query:{method: 'GET'},
    		query_array: {
    			method:'GET',
    			url:'test_array.json'
    		}
    	});
  }]);
