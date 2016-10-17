(function() {
    var app = angular.module('alm', []);
    app.controller('almController', function ($scope,store) {
    	 $scope.def=store.def;
    });
       
})();