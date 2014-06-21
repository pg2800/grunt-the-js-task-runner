angular.module("testapp", ['ngRoute'])
.run(['$rootScope', '$location', function ($rootScope, $location) {
	$rootScope.location = $location;
}])
.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	// $locationProvider.html5Mode(true);
	// http://localhost/grunt-the-js-task-runner/chap04/helloWorld/src
	// console.log(location.href+'partials/landingPage.tpl.html');
	$routeProvider
	.when('/',  {
		templateUrl: /*location.href+*/'partials/landingPage.tpl.html'
		,controller: 'NameCtrl'
	})
	.otherwise({ 
		redirectTo: '/'
	});

}])
.controller('NameCtrl', ['$scope', function ($scope) {
	$scope.hola = "HOLAA"
}]);