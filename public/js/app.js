// AngularJS dependency injection - inject defined application modules into our app
var app = angular.module('meanApp', ['ngRoute', 'appRoutes', 'MainController', 'UserController', 'UserService']);

app.run(function($rootScope, $location, $http) {
});