angular.module("njyApp", ["njy-directive", "njy-model", "njy-config"])
	.run(["$rootScope", "NJYCON", function($rootScope, NJYCON) {
		$rootScope.cookieDomain = NJYCON.cookieDomain;
		$rootScope.hostUrl = NJYCON.hostUrl;
		$rootScope.loginUrl = NJYCON.loginUrl;
		$rootScope.serverFrontHost = NJYCON.serverFrontHost;
		$rootScope.frontHost = NJYCON.serverFrontHost;
		$rootScope.nongjiawangHost = NJYCON.nongjiawangHost;
	}])


.controller("indexController", ["$scope","buyCar", function($scope,buyCar) {
	$scope.province="省";
	$scope.city="市";
	$scope.county="县";

}]);
