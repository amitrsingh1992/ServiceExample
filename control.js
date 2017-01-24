var dashboard = angular.module("dashboard",["ui.router","satellizer"]);
dashboard.config(function ($stateProvider,$urlRouterProvider) {
  var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.reject();
  } else {
    deferred.resolve();
  }
  return deferred.promise;
}];

var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.resolve();
  } else {
    $location.path('/login');
  }
  return deferred.promise;
}];
  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'loginCtrl',
    resolve: {
     skipIfLoggedIn: skipIfLoggedIn
   }
 })
  .state('empDetails',{
    url:'/empDetails/:engineer',
    controller:'empDetailsCtrl',
    templateUrl:'templates/empDetails.html',
    resolve: {
     loginRequired: loginRequired
   }
 })
  .state('empList',{
    url:'/empList',
    templateUrl:'templates/empList.html',
    controller:'empListCtrl',
    resolve: {
     loginRequired: loginRequired
   }
 })
 .state('logout',{
   url:'/logout',
   controller:'logoutCtrl',
   resolve: {
    loginRequired: loginRequired
  }
})
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'templates/dashboard.html',
    controller:'dashboardCtrl',
    resolve: {
      loginRequired: loginRequired
    }
  })
$urlRouterProvider.otherwise('/login');
});
