var userService = angular.module('UserService',[]);

userService.factory('UserSrv', ['$http', '$rootScope', function($http, $rootScope) {

  return {
    // call to get all users
    // $http is an AngularJS (AJAX) service for reading data from remote servers.
    // $http.get() reads JSON data from the specified URL
    getAll : function() {
      console.log('In UserService: GET /users ')
      return $http.get('/api/users');
    },

    // call to POST and create a new user
    create : function(userData) {
      return $http.post('/api/users', userData);
    },

    // call to DELETE a user
    delete : function(id) {
      return $http.delete('/api/users/' + id);
    }
  }


}]);