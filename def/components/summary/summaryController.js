(function() {
    var app = angular.module('summary', []);
	app.controller('summaryController', function ($scope,$http,$q,store) {
		   $scope.def=store.def;
	    this.summaryredirect = function(location){
	        window.location = location;
	    };  
	    
	    this.submit = function(data){    	
	    	console.log("formdata"+data)
	    	var deferred = $q.defer();
	    	$http({
	    	    method: 'POST',
	    	    url: "http://defnode.cfapps.io/def",
	    	    data:data
	    	}).success(function(data, status, headers, config) {
	    		console.log("success data:"+data);
	    		
	    		deferred.resolve(data);
	    	}).error(function(data, status, headers, config) {
	    		 console.log("fail data:"+data);
	           
	        });
	    	};
	});
})();