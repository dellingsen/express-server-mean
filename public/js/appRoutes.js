angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainCtrl',
        loginRequired: true //
    })
	.when('/users', {
	  templateUrl: 'views/user.html',
	  controller: 'UserCtrl',
      loginRequired: true //
    })
    .when('/adduser', {
      templateUrl: 'views/adduser.html',
      controller: 'AddUserController',
      loginRequired: true //
    })
    .otherwise({redirectTo: '/'})

  $locationProvider.html5Mode(true);

}]);