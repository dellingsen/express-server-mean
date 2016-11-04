// AngularJS dependency injection - inject defined application modules into our app
var app = angular.module('meanApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'UserCtrl', 'UserService']);

app.run(function($rootScope, $location, $http) {
});