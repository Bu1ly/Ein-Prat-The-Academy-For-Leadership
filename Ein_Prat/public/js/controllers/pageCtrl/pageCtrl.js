angular.module('mainApp')
    .controller('PageCtrl', ['$http','$scope', function($http,$scope) {
        $scope.page = {};
        $scope.review = "";
        $scope.reviews = [];

        $scope.note = "";
        $scope.notes = [];

        $scope.addRev = false;
        $scope.addNote = false;

        $scope.postReview = function(){
                $http({method: 'POST', url: '/review', data: $scope.review})
                    .then(function(data){
                        console.log(data);
                        console.log("Inserted to DB");
                        $scope.reviews.push($scope.review);
                    })
                    .catch(function() { console.log("Note Unsuccessful") });
            };

        $scope.postNote = function(){
            $http({method: 'POST', url: '/note', data: $scope.note})
                .then(function(data){
                    console.log(data);
                    console.log("Inserted to DB");
                    $scope.notes.push($scope.note);
                })
                .catch(function() { console.log("Note Unsuccessful") });
        };

        // this.getPage = function(){
        //     $http({method: 'GET', url: '/page', data: this.page})
        //         .then(function(data){
        //             return this.page;
        //         });
        // };
    }]);
