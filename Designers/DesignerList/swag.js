
app.controller('list', function($scope, dataget){
 //  $http({
 //   method: 'GET',
 //   url: 'https://dev.datetheramp.com/api/app/catalog/designers/?page=1&page_size=60'
 // }).then(function successCallback(response) {
 //     $scope.details=response.data;
 //
 //
 //   });
 // var itemss={};
 dataget.getdat().then(function(response){
            $scope.details = response.data;
   // $scope.curPage = 1,
        //  $scope.itemsPerPage = 8,
        //  $scope.maxSize = 5;
        //
        //
        //
        //  $scope.numOfPages = function () {
        //    return Math.ceil($scope.details.length / $scope.itemsPerPage);
        //
        //  };
        //
        //    $scope.$watch('curPage + numPerPage', function() {
        //    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
        //    end = begin + $scope.itemsPerPage;
        //
        //    $scope.filteredItems = $scope.details.slice(begin, end);
        //  });
  $scope.currentPage = 1;
  $scope.numPerPage = 8;
  $scope.maxSize = 5;

$scope.$watch('currentPage + numPerPage', updateFilteredItems);

  function updateFilteredItems() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
      end = begin + $scope.numPerPage;

    $scope.filtereddetails = $scope.details.slice(begin, end);
  }
});
});




app.config([
 '$stateProvider',
 function($stateProvider) {


  $stateProvider
      .state('description', {
        url: '/desc/:id',
        templateUrl: 'Designers/DesignerDesc/description.htm',
        controller: 'descr as vm'
      });
 }])
