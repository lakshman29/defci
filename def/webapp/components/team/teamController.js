(function() {
    var teamModule = angular.module('team', ['ngMaterial']);
    teamModule.controller('teamController', function ($scope,$timeout,$q,store){
            $scope.def = store.def;

       var pendingSearch, cancelSearch = angular.noop;
    var cachedQuery, lastSearch;

    $scope.allContacts = loadContacts();
    $scope.contacts = [$scope.allContacts[0]];
    $scope.asyncContacts = [];
    $scope.filterSelected = true;

    $scope.querySearch = querySearch;
    $scope.delayedQuerySearch = delayedQuerySearch;

    /**
     * Search for contacts; use a random delay to simulate a remote call
     */
    function querySearch (criteria) {
      cachedQuery = cachedQuery || criteria;
      return cachedQuery ? $scope.allContacts.filter(createFilterFor(cachedQuery)) : [];
    }

    /**
     * Async search for contacts
     * Also debounce the queries; since the md-contact-chips does not support this
     */
    function delayedQuerySearch(criteria) {
      cachedQuery = criteria;
      if ( !pendingSearch || !debounceSearch() )  {
        cancelSearch();

        return pendingSearch = $q(function(resolve, reject) {
          // Simulate async search... (after debouncing)
          cancelSearch = reject;
          $timeout(function() {

            resolve( $scope.querySearch() );

            refreshDebounce();
          }, Math.random() * 500, true)
        });
      }

      return pendingSearch;
    }

    function refreshDebounce() {
      lastSearch = 0;
      pendingSearch = null;
      cancelSearch = angular.noop;
    }

    /**
     * Debounce if querying faster than 300ms
     */
    function debounceSearch() {
      var now = new Date().getMilliseconds();
      lastSearch = lastSearch || now;

      return ((now - lastSearch) < 300);
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);
      };

    }

    function loadContacts() {
      var contacts = [
        
        {"name":"Suresh Naik","email": "snaik@altimetrik.com","_lowername":"suresh"},
        {"name":"Lakshman","email": "lakshman@altimetrik.com","_lowername":"laks"},
        {"name":"Binu","email": "binu@altimetrik.com","_lowername":"binu"}
      ];
      return contacts;
      
    }
           
    });
})();