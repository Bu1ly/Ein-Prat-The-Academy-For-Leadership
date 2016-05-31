angular.module('mainApp')
    .controller('RegisterCtrl', ['$http','$scope', function($http,$scope) {
        $scope.user = {
            id: "",
            password: ""
        };

        $scope.newUser = function(){
            $http({method: 'POST', url: '/reg', data: $scope.user})
                .then(function(data){
                    console.log("Success, the users inside db should be: ");
                })
            .catch(function() { console.log("Unsuccessful") });
        };
    }]);
