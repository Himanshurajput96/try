

 //  var getting= function($http){
 //  $http({
 //   method: 'GET',
 //   url: 'https://dev.datetheramp.com/api/app/catalog/designers/?page=1&page_size=60'
 // }).then(function successCallback(response) {
 //       $scope.details=response.data;
 //   }, function errorCallback(response) {
 //      console.log("no response");
 //   });
 // }

app.directive('mainbar',function(){
  return{ templateUrl: "Designers/mainbar.htm"

};
})


app.config([
'$stateProvider',
function($stateProvider) {

 $stateProvider
   .state('designerlist', {
     url: '/list',
     templateUrl: 'Designers/DesignerList/list.htm',
     controller:'list'

   });






// app.controller('list', function($scope,$http){
//   $http({
//    method: 'GET',
//    url: 'https://dev.datetheramp.com/api/app/catalog/designers/'
//  }).then(function successCallback(response) {
//      $scope.details=response.data;
//    }, function errorCallback(response) {
//      console.log("no response");
//    });
//
//
//
//  });


 // app.controller('descr', function($scope,$http,$stateParams){
 //  var vm=this;
 //  vm.idnum= function(){
 //    return  $stateParams.id;
 //  }
 //
 //  vm.id=vm.idnum();
 //
 //   $http({
 //    method: 'GET',
 //    url: 'https://dev.datetheramp.com/api/app/catalog/designers/'
 //    // params : {id: $stateParams.id}
 //  }).then(function successCallback(response) {
 //      $scope.detailss=response.data;
 //   });
 //
 // });




  //
  // $stateProvider
  //     .state('description', {
  //       url: '/desc/:id',
  //       templateUrl: 'description.htm',
  //       controller: 'descr as vm'
  //     });




}])








  // $http.get("https://dev.datetheramp.com/api/app/catalog/designers/")
  //     .then(function(response)
  // {
  // $scope = response.data.records;});
  // });








/* $http({
  method: 'GET',
  url: 'https://dev.datetheramp.com/api/ops/admin/search/suggestions/34/'
}).then(function successCallback(response) {
    $scope=response;
  }, function errorCallback(response) {
    console.log("no response");
  });
});
*/
