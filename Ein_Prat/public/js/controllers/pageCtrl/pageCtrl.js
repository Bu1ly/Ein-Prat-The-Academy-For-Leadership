angular.module('mainApp')
    .controller('PageCtrl', ['$http','$scope', function($http,$scope) {
        $scope.page = {};
        $scope.review = "";
        $scope.reviews = [];

        $scope.note = "";
        $scope.notes = [];

        $scope.postReview = function(){
            console.log("postReview activated");
            console.log($scope.review);
        };

        // this.getPage = function(){
        //     $http({method: 'GET', url: '/page', data: this.page})
        //         .then(function(data){
        //             return this.page;
        //         });
        // };
        //  this.newReview = function(){
        //      $http({method: 'POST', url: '/rev', data: this.review})
        //      this.reviews.push(this.review);
        //      this.review = {};
        //
        //  };
    }]);
