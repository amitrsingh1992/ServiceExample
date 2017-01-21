angular.module("dashboard").controller("empDetailsCtrl",function ($scope,$auth,$state,myService,$stateParams) {
  var engineerId = $stateParams.engineer;
  myService.httpCall("readEmployeePersonalData?token=sr55afgasdf0&engineerId="+engineerId).then(function (data) {
console.log("detail=",data.data);
$scope.empData=data.data.employeeData;
console.log($scope.empData);
$scope.personalData=data.data.personalData;
console.log($scope.personalData);
  }).catch(function (error) {
    console.log(error);
  })
});
