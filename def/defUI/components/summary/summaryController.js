(function() {
    var app = angular.module('summary', []);
	app.controller('summaryController', function ($scope,$http,$q,store, $mdDialog) {
		   $scope.def=store.def;
	    this.summaryredirect = function(location){
	        window.location = location;
	    };  
	    
      //   function presentJson(){
      //   	var strTeams =""; 
      //   	alert("temp");
      //   	var exitingMembers = $scope.def.program.project.team;
      //   	for (i = 0; i < exitingMembers.length; i++) {
    		// 	strTeams += exitingMembers[i].name;
    		// }
      //   	$scope.teamMembers = strTeams;

      //   }   presentJson(); 
        
	    this.submit = function(data,ev){    	
	            
	        console.log("formdata"+data)
	    	var deferred = $q.defer();
	    	$http({
	    	    method: 'POST',
	    	    url: "http://defnode.cfapps.io/def/programs/",
	    	    data:data
	    	}).success(function(data, status, headers, config) {
	    		console.log("success data:"+data);
	    		$scope.result = data.message;

	    		 $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Developer Enablement Framework')
                     .textContent($scope.result)
                     .ariaLabel($scope.result)
                     .ok('Close')
                     .targetEvent(ev)
                     // .finally(function(){ alert(1)})
               );
	    		deferred.resolve(data);
	    		
	    	}).error(function(data, status, headers, config) {
	    		 console.log("fail data:"+data);
	           
	        });
	    };
	    	

	});
})();