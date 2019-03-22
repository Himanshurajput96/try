var app = angular.module('app',['ui.router','ui.bootstrap']);

app.factory('dataget',function($http){
  var obj={};
  obj.getdat = function(){
     return $http.get('https://dev.datetheramp.com/api/app/catalog/designers/?page=1&page_size=60');
   }
    return obj;

})
