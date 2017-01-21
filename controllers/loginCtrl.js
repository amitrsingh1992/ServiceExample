angular.module("dashboard").controller('loginCtrl',function ($scope,$auth,$state,$timeout,myService) {
console.log("loginCtrl...");
$scope.loginFunction=function(){
  console.log("loginCtrlrunning");
  $scope.loginProcess = true;
  $scope.loginFailed = false;
  console.log($scope.data);
  $auth.login($scope.data,{"url":myService.ipAddress+"login"})
  .then(function () {
    $state.go("dashboard");
  }).catch(function (data) {
    $scope.loginProcess = false;
    $timeout(function () {
      $scope.loginFailed = false;

    },2000);

    $scope.loginFailed = true;
    console.log(data);
  })
}

});
