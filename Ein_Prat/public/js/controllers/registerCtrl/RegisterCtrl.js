angular.module('mainApp')
    .controller('RegisterCtrl', ['$http','$scope', function($http,$scope) {
        $scope.user = {
            firstName: "",
            lastName: "",
            Email: "",
            identity: "",
            sis: ""
        };

        $scope.newUser = function(){
            console.log($scope.user);
            $http({method: 'POST', url: '/reg', data: $scope.user})
                .then(function(data){
                    console.log("Inserted to DB");
                })
            .catch(function() { console.log("Unsuccessful") });
        };
        $scope.confirmPass = function(){

        }


    }]);
