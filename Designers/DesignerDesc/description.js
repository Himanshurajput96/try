


app.controller('descr', function($scope,dataget,$stateParams){
 var vm=this;
 vm.idnum= function(){
   return  $stateParams.id;
 }

// $scope.id= $stateParams.id;
 vm.id=vm.idnum();
// getting();
dataget.getdat().then(function(response){
           $scope.detailss = response.data;
       })
 });
