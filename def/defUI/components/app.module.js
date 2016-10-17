(function() {
    var app = angular.module('def', ['projectmetadata','buildpack','team','cdcycle','services','sizing','alm','summary','ngMaterial','storeFac']);
   
    app.controller('AppCtrl', function($scope, $mdDialog, $mdMedia,$location) { 	
    	
     
      
      $scope.selectedIndex = 0;
      
      $scope.upIndex = function(){
        $scope.selectedIndex++;
      }
      $scope.downIndex = function(){
        $scope.selectedIndex--;
      }
    });

    /*app.factory('store', function(){    	
    	var def = {};    	
    	return {
    		def: def
    	};
    	})  */
})();










