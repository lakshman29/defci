(function() {
	var app = angular.module('storeFac', []);
	app.factory('store', function(){    	
    	var def = {"program":{
    		"programId":"",
    		"programName":"",
    		"project":{
    			"projectId":"",
    			"projectName":"",
    			
    			"team":[],	
    	
    			"ciCd":[
				  {
				    "env":"Dev",
					"criteria":"",
					"buildActivity":[{"name":"Unit Test","value":true},{"name":"Integration Test","value":false},{"name":"Jacoco ","value":false},{"name":"SonarCube","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"UI Test","value":false},{"name":"Push to Artifactory","value":false}]
					  },{
					    "env":"QE",
					"criteria":"",
					"buildActivity":[{"name":"Build","value":true},{"name":"Trigger Approval Email","value":false},{"name":"Functional Test","value":false},{"name":"Integration Test ","value":false},{"name":"Jacoco","value":false},{"name":"SonarCube","value":false},{"name":"Pull from Artifactory","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Regression Test","value":false}]
					  },{
					    "env":"Build",
					"criteria":"",
					"buildActivity":[{"name":"Build","value":true},{"name":"Trigger Approval Email","value":false},{"name":"Functional Test","value":false},{"name":"Integration Test ","value":false},{"name":"Jacoco","value":false},{"name":"SonarCube","value":false},{"name":"Pull from Artifactory","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Regression Test","value":false}]
					  },
					  {
					    "env":"Staging",
					"criteria":"",
					"buildActivity":[{"name":"Build","value":true},{"name":"Trigger Approval Email","value":false},{"name":"Functional Test","value":false},{"name":"Integration Test ","value":false},{"name":"Jacoco","value":false},{"name":"SonarCube","value":false},{"name":"Pull from Artifactory","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Regression Test","value":false}]
					  },
					  {
					    "env":"Prod",
					"criteria":"UAT",
					"buildActivity":[{"name":"Build","value":true},{"name":"Promotion Job","value":false},{"name":"Trigger Approval Email","value":false},{"name":"Pull from Artifactory ","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Smoke Test","value":false},{"name":"Monitoring","value":false}]
					  }
				  ],
				  "bp":{
					  "lang":"",
					  "tool":"",
					  "pack":"",
					  "version":"",
					  "dependencies":[]
				  }
    			          
    		}
    	}
    			      };    	
    	
    	/*var ciCd=[
   			          {
  			            "env":"Dev",
  			            "criteria":"",
  			            "buildActivity":[{"name":"Unit Test","value":true},{"name":"Integration Test","value":false},{"name":"Jacoco ","value":false},{"name":"SonarCube","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"UI Test","value":false},{"name":"Push to Artifactory","value":false}]
  			          },{
  			            "env":"QE",
  			            "criteria":"",
  			            "buildActivity":[{"name":"Build","value":true},{"name":"Trigger Approval Email","value":false},{"name":"Functional Test","value":false},{"name":"Integration Test ","value":false},{"name":"Jacoco","value":false},{"name":"SonarCube","value":false},{"name":"Pull from Artifactory","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Regression Test","value":false}]
  			          },{
  			            "env":"Build",
  			            "criteria":"",
  			            "buildActivity":[{"name":"Build","value":true},{"name":"Trigger Approval Email","value":false},{"name":"Functional Test","value":false},{"name":"Integration Test ","value":false},{"name":"Jacoco","value":false},{"name":"SonarCube","value":false},{"name":"Pull from Artifactory","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Regression Test","value":false}]
  			          },
  			          {
  			            "env":"Staging",
  			            "criteria":"",
  			            "buildActivity":[{"name":"Build","value":true},{"name":"Trigger Approval Email","value":false},{"name":"Functional Test","value":false},{"name":"Integration Test ","value":false},{"name":"Jacoco","value":false},{"name":"SonarCube","value":false},{"name":"Pull from Artifactory","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Regression Test","value":false}]
  			          },
  			          {
  			            "env":"Prod",
  			            "criteria":"UAT",
  			            "buildActivity":[{"name":"Build","value":true},{"name":"Promotion Job","value":false},{"name":"Trigger Approval Email","value":false},{"name":"Pull from Artifactory ","value":false},{"name":"Deploy","value":false},{"name":"App Verification","value":false},{"name":"Smoke Test","value":false},{"name":"Monitoring","value":false}]
  			          }
  			          ];
    	var project={
    		"projectId":"",
    	    "projectName":""
    	};
    	var program={
        		"programId":"",
        	    "programName":""
        	};
    	var team=[];*/
    	
        return {
    		def: def
    		//ciCdTemp:ciCd,
    		//projectTemp:project,
    	    //programTemp:program
    	};
    	})  
})();