(function() {
    var app = angular.module('projectmetadata', ['ngMaterial']);
    app.controller('projectmetadataController', function ($scope,$timeout,$http,store) { 
    	$scope.def=store.def;    	
    	$scope.projectFlag=false;    	
    	$scope.newPrg={"programName":"New Program","programId":""}
    	$scope.newProj={"projectName":"New Project","projectId":""}
    	$scope.loadPrograms = function() {
    		var promise=$http.get('http://defnode.cfapps.io/def/programs');
    		promise.success(function(data, status, headers, config) {
            	$scope.users =data;               
               $scope.users.splice(0, 0, $scope.newPrg);
			});
    		promise.error(function (data, status, headers, config){
            	 store.def="";
            });
    	  }; 

    	  $scope.loadProjects = function() {;    		 
    		  
    		  if($scope.def.program.programId){
    		  var promise=$http.get('http://defnode.cfapps.io/def/programs/'+$scope.def.program.programId);
    		  promise.success(function(data, status, headers, config) {               
                  $scope.projects =data.projects;
                  if($scope.projects)
                  $scope.projects.splice(0, 0, $scope.newProj);
              }); 
    		  promise.error(function (data, status, headers, config){
    			  $scope.projects="";
             });}else{
            	 $scope.def.program.project.projectId="";
            	 $scope.def.program.project.projectName="";
             }
      	    
      	  }; 
    	
        $scope.check=function(){
			$scope.def.program.project.projectId=$scope.def.s_project.projectId;
			$scope.def.program.project.projectName=$scope.def.s_project.projectName;
			$scope.def.program.project.team=$scope.def.s_project.team;
			$scope.def.program.project.services = $scope.def.s_project.services;
			$scope.def.program.project.customServices = $scope.def.s_project.customServices;
            $scope.def.program.project.ciCd = $scope.def.s_project.ciCd;
            $scope.def.program.project.bp = $scope.def.s_project.bp;
            $scope.def.program.project.alm = $scope.def.s_project.alm;
            $scope.def.program.project.sizing = $scope.def.s_project.sizing;
			if(angular.equals($scope.def.s_project.projectName,"New Project")){
				$scope.def.program.project.projectName="";
				$scope.def.program.project.team=[];
				$scope.def.program.project.services = [];
				$scope.def.program.project.customServices = [];
                $scope.def.program.project.ciCd = [];
                $scope.def.program.project.bp = {};
                $scope.def.program.project.alm = {};
                $scope.def.program.project.sizing = {};

			}       		
        }

        $scope.checkProgram=function(){
        	$scope.def.program.programId=$scope.def.s_program.programId;
			$scope.def.program.programName=$scope.def.s_program.programName;
        	if(!$scope.def.program.programId) {
        		$scope.def.program.programName="";
        		$scope.def.program.programName="";
        		$scope.def.program.project.team=[];
                $scope.def.program.project.services = [];
                $scope.def.program.project.customServices = [];
                $scope.def.program.project.ciCd = [];
                $scope.def.program.project.bp = {};
                $scope.def.program.project.alm = {};
                $scope.def.program.project.sizing = {};
			}
        	$scope.def.program.project.projectId="";
			$scope.def.program.project.projectName="";
    		$scope.def.program.project.team.length=0;    		
        }
        
        
          
    });
})();