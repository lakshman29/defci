(function() {
    var servicesModule = angular.module('services', ['ngMaterial']);
    servicesModule.controller('servicesController', function ($scope,$timeout,$q,store){
    $scope.def = store.def;
    $scope.readonly = false;
    $scope.selectedService = null;
    $scope.searchService = null;
    $scope.queryServiceSearch = queryServiceSearch;
    $scope.services = loadServices();   
    $scope.autoCompleteRequireMatch = true;
   
   // for custom Service
    $scope.selectedCustomService = null;
    $scope.searchCustomService = null;
    $scope.queryCustomServiceSearch = queryCustomServiceSearch;
    $scope.customServices = loadCustomServices();

     /**
     * Search for custom Services.
     */
    function queryCustomServiceSearch (query) {
      var results = query ? $scope.customServices.filter(createFilterFor(query)) : [];
      return results;
    } 
    /**
     * Search for service.
     */
    function queryServiceSearch (query) {
      var results = query ? $scope.services.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(service) {
        return (service.serviceId.indexOf(lowercaseQuery) === 0) 
         // || (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
      };

    }

    function loadServices() {
        var services = [        
            {"name":"MongoDB"},
            {"name":"ElephantDB"},
            {"name":"Redis"},
            {"name":"MySQL"}
        ];

        return services.map(function (services) {
            services.serviceId = services.name.toLowerCase();
            return services;
        });
    }

    function loadCustomServices() {
        var customServices = [        
            {"name":"my Mongo"},
            {"name":"my Sql"},
            {"name":"My Redi"},
            {"name":"My db"}
        ];

        return customServices.map(function (customServices) {
            customServices.serviceId = customServices.name.toLowerCase();
            return customServices;
        });
    }        
});
})();