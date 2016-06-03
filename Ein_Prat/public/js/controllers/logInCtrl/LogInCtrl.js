angular.module('mainApp')
    .controller('LogInCtrl', ['$http','$scope', function($http,$scope) {
    $scope.user = {
        firstName: "",
        lastName: ""
    };

        this.checkUser = function(){
            console.log(this.user);
            $http({method: 'GET', url: '/log', data: $scope.user})
                .then(function(data){
                    $scope.user.firstName = data;
                    console.log("{{user.name}}" + "is exists!")

                });
        };
    }]);
