angular.module("dashboard").controller("empListCtrl",function ($scope,myService,$auth,$state,myService) {


myService.httpCall("searchEmployeeByName?token=sr55afgasdf0").then(function (data) {
  $scope.employeeList=data.data.employeeList;

  console.log(data.data.employeeList);
});
});
