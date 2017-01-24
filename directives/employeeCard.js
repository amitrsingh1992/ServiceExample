angular.module("dashboard").directive('card',function(){
  return {
      replace:true,
      restrict: 'EA',
      templateUrl: 'templates/cardDisplay.html'
  }
});
