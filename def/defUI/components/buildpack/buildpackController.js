(function() {
    var app = angular.module('buildpack', []);
    app.controller('buildpackController', function($scope,store) {
            $scope.dependencies = true;
            $scope.def=store.def;
            $scope.dependencyFlag = false;
            // start of contact function

            $scope.dependenciesList = {
                "Core": {
                    "security": {
                        "name": "Security",
                        "description": "Secure your application via spring-security",
                        "value":false},
                    "aop": {
                        "name": "AOP",
                        "description": "Aspect-oriented programming including spring-aop and AspectJ","value":false
                    },
                    "jta-atomikos": {
                        "name": "Atomikos_(JTA)",
                        "description": "JTA distributed transactions via Atomikos","value":false
                    },
                    "cache": {
                        "name": "cache",
                        "description": "Spring's Cache abstraction","value":false
                    }
                },
                "Web": {
                    "web": {
                        "name": "Web",
                        "description": "Full-stack web development with Tomcat and Spring MVC","value":false
                    },
                    "websocket": {
                        "name": "Websocket",
                        "description": "Websocket development with SockJS and STOMP","value":false
                    }
                },
                "NoSQL": {
                    "mongoDB": {
                        "name": "MongoDB",
                        "description": "MongoDB NoSQL Database, including spring-data-mongodb","value":false
                    },
                    "cassandra": {
                        "name": "Cassandra",
                        "description": "Cassandra NoSQL Database, including spring-data-cassandra","value":false
                    },
                    "couchbase": {
                        "name": "Couchbase",
                        "description": "Couchbase NoSQL database, including spring-data-couchbase","value":false
                    }
                },
                "SQL": {
                    "jooq": {
                        "name": "jooq",
                        "description": "Persistence support using Java Object Oriented Querying","value":false
                    },
                    "jdbc": {
                        "name": "jdbc",
                        "description": "JDBC databases","value":false
                    },
                    "h2": {
                        "name": "h2",
                        "description": "H2 database (with embedded support)","value":false
                    }
                }
            };
            // chip search
            var vm = this, counter = 0;
            $scope.selectedChips = [];
            $scope.selectedItem = null;
            $scope.searchText = null;
            $scope.logs = [];

            $scope.chipSet = [];
            angular.forEach($scope.dependenciesList, function(v1, k1) {
                angular.forEach(v1, function(v2, k2) {
                    var setValues ="";
                    //setValues = v2;
                    setValues = k2;
                    $scope.chipSet.push(setValues);
                });
            });

           /* $scope.chipSearch = function(text) {
            	// angular.forEach($scope.chipSet, function(v2) {
            		// console.log(v2);
            	return $scope.chipSet.filter(function(object) {
                if (angular.isString(text)) {
                
                  return object.name.search(text) > -1;
                } else {
                  return false;
                }
              });
            	//});
            };*/
            
            
           $scope.chipSearch = function(text) {
            	// angular.forEach($scope.chipSet, function(v2) {
            		// console.log(v2);
            	return $scope.chipSet.filter(function(object) {
                if (angular.isString(text)) {
                
                  return object.search(text) > -1;
                } else {
                  return false;
                }
              });
            	//});
            };
           
            $scope.transformChip = function(chip) {
              return chip;
            };
           
            $scope.selectChip = function(chip) {
              $scope.logs.push(++counter + ' selected ' + chip.text);
            };
           
            $scope.addChip = function(chip) {
              chip.value=true;
              $scope.logs.push(++counter + ' added ' + chip.text);
            };
           
            $scope.removeChip = function(chip) {
              chip.value=false;
              $scope.logs.push(++counter + ' removed ' + chip.text);
            };            

            $scope.quotaValue = 40;
            $scope.def.program.project.bp.dependencies = [];

            $scope.myFn = function(chip) {
                //this make a copy and allow repeated items in the list.
                var newChip = "";
                angular.copy(chip, newChip);
               // $scope.v2.value=true;
              // $scope.def.program.project.bp.dependencies=true;
                //$scope.formData[chip] = true;
                
                angular.forEach($scope.dependenciesList, function(v1, k1) {
                    angular.forEach(v1, function(v2, k2) {
                       // var setValues ="";
                        //setValues = v2;
                       // setValues = k2;
                    	if(chip.toUpperCase() === v2.name.toUpperCase())v2.value=true;
                       // $scope.chipSet.push(setValues);
                    });
                });
                
                return newChip;
            }
            /*$scope.myFnn = function(chip) {
                //this make a copy and allow repeated items in the list.
                var newChipp = {};
                angular.copy(chip, newChipp);
                $scope.formData[chip] = false;
                return newChipp;
            }*/

            $scope.onAddChip = function (textVal) {
               
                
                if (textVal.value == false) {
                    $scope.def.program.project.bp.dependencies.push(textVal.name);
                }else if (textVal.value == true){
                    $scope.def.program.project.bp.dependencies.pop(textVal.name);
                };
                    
            }
        })
       
})();