angular.module('mainApp')
    .controller('LogInCtrl', ['$http','$scope', function($http,$scope) {
   
    $scope.user = {
        identity: "",
        sis: ""
    };

        $scope.checkUser = function(){
            console.log($scope.user);
            $http({method: 'POST', url: '/log', data: $scope.user})
                .then(function(data){
                   /// $scope.user.id = data;  ????? whay???
                    console.log("id exists!");
                    alert("login success!!");
                })
                .catch(function() { console.log("Unsuccessful login") });
        };
    }]);
