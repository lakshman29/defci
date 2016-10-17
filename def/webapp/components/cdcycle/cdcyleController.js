(function() {
    var app = angular.module('cdcycle', []);
    app.controller('cdcyleController', function ($scope,store) {
      $scope.def=store.def;
     
     
    });   

})();