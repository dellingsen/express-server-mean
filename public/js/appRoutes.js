angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainController',
        loginRequired: true //
    })
	.when('/users', {
	  templateUrl: 'views/user.html',
	  controller: 'UserController',
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