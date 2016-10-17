(function() {
    var app = angular.module('projectmetadata', ['ngMaterial']);
    app.controller('projectmetadataController', function ($scope,$timeout,$http,store) { 
    	$scope.def=store.def;    	
    	$scope.projectFlag=false;
    	
    	/*$scope.programTemp=store.programTemp;
    	$scope.projectTemp=store.projectTemp;
    	$scope.teamTemp=store.teamTemp;
    	$scope.ciCdTemp=store.ciCdTemp;*/
    	$scope.newPrg={"programName":"New Program","programId":""}
    	$scope.newProj={"projectName":"New Project","projectId":""}
    	$scope.loadPrograms = function() {
    		//return $timeout(function() {
    		var promise=$http.get('http://defnode.cfapps.io/def/programs');
    		promise.success(function(data, status, headers, config) {            	
    			//store.def=data;
    			//$scope.def=data;
            	$scope.users =data;               
               $scope.users.splice(0, 0, $scope.newPrg);
               //$scope.s_program = $scope.users[0];
            });
    		promise.error(function (data, status, headers, config){
            	 store.def="";
            });// }, 0);
    	    
    	  }; 
    	  
    	 // $scope.loadPrograms();
    	  
    	  
    	  $scope.loadProjects = function() {;    		 
    		  
    		  if($scope.def.program.programId){
    		  var promise=$http.get('http://defnode.cfapps.io/def/programs/'+$scope.def.program.programId);
    		  promise.success(function(data, status, headers, config) {               
                  $scope.projects =data.projects;
                  if($scope.projects)
                  $scope.projects.splice(0, 0, $scope.newProj);
                //  $scope.def.s_project = $scope.projects[0];
              }); 
    		  promise.error(function (data, status, headers, config){
    			  $scope.projects="";
             });}else{
            	 $scope.def.program.project.projectId="";
            	 $scope.def.program.project.projectName="";
             }
      	    
      	  }; 
    	
        $scope.check=function(){
        	
        	//if($scope.def.program.project.projectId) 
        		$scope.def.program.project.projectId=$scope.def.s_project.projectId;
        		$scope.def.program.project.projectName=$scope.def.s_project.projectName;
        		$scope.def.program.project.team=$scope.def.s_project.team;
        		if(angular.equals($scope.def.s_project.projectName,"New Project")){$scope.def.program.project.projectName="";$scope.def.program.project.team=[];}
        		
        }
        $scope.checkProgram=function(){
        	$scope.def.program.programId=$scope.def.s_program.programId;$scope.def.program.programName=$scope.def.s_program.programName;
        	if(!$scope.def.program.programId) {
        		$scope.def.program.programName="";
        		$scope.def.program.programName="";  
        		//$scope.def.program.project={};
        		$scope.def.program.project.team=[];
        		/*var program=$scope.programTemp;program.project=$scope.projectTemp;program.project.team=$scope.teamTemp;
        		$scope.def.program=program;
        	*/}
        	$scope.def.program.project.projectId="";$scope.def.program.project.projectName="";
    		$scope.def.program.project.team.length=0;
    		
        }
        
        
          
    });
})();