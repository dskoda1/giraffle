(function(){
    var app = angular.module('donation-controllers', ['$scope']);
    
    // app.donationController = function($scope){
    //   $scope.donations = donations;  
    // };
    
    app.controller('donationController', ['$scope', function($scope){
        $scope.donations = donations;
    }]);
       

    
});

