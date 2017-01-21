angular.module("dashboard").service("myService",function ($http) {
  this.ipAddress="http://192.168.0.133:3000/";
  var self = this;
this.httpCall=function (url) {
console.log((self.ipAddress)+url);
    return $http.get((self.ipAddress)+url);
}
})
