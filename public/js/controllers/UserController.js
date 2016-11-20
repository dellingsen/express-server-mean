var userController = angular.module('UserController', []);

// The UserController function is a standard JavaScript object constructor.
// AngularJS will invoke UserController with a $scope and UserSrv object
// The scope is the binding part between the HTML (view) and the JavaScript (controller)
// $scope object holds all application variables and functions
// Note: Use an array of Strings so Angular can resolve dependencies...
userController.controller('UserCtrl', ['$scope', 'UserSrv', function($scope, UserSrv)
{
  console.log('In UserController....calling UserService now.')

  UserSrv.getAll().success(function(data)
  {
    // Create userList property on the Application $scope object
    $scope.userList = data;
    $scope.userSize = data.length;
  }).
  error(function(data, status) {
    console.log('UserController:Error');
    console.log(data);
    $scope.errorMsg = {message: 'Error: no users were found.'};
  });

}])


userController.controller('AddUserController', function($scope, $location, UserSrv)
{
  console.log('In AddUserController....calling UserService now.')

  $scope.save = function() {
    console.log('Form data for user info')
    console.log($scope.user)
    console.log($scope.firstname)
    console.log($scope.lastname)
    console.log($scope.username)
    console.log($scope.password)
    console.log($scope.email)

    var userEntry = { firstname: $scope.firstname, lastname: $scope.lastname,
                      username: $scope.username, password: $scope.password,
                      email: $scope.email, endpoint_type: 'email', endpoint_value: $scope.email};

    console.log('User Entry object:')
    console.log(userEntry)

    UserSrv.create(userEntry).success(function(data)
    {
      console.log('AddUserController:Save Success');
      console.log(data);
      $location.path('/users');
    }).
    error(function(data, status) {
      console.log('AddUserController:Error');
      console.log(data);
      $scope.errorMsg = {message: 'Error: could not create user'};
    });

  }

})