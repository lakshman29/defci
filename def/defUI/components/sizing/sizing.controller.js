(function() {
    var app = angular.module('sizing', []);
    app.controller('SizingController', function ($scope,store) {
          
       $scope.def=store.def;

    });
})();