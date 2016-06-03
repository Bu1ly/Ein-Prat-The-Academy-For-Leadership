
angular.module('mainApp')
    .controller('SeniorCtrl', ['$http','$scope', function($http,$scope) {

        $scope.infoUser = {
            firstName: "",
            lastName: "",
            city: "",
            army_type: "",
            army_unit: "",
            keva_ktsuna: "",
            trip_place: "",
            courses: "",
            knowledge_type: "",
            knowledge: "",
        };



        // FINISH HTTP FUNCTION
        $scope.updateInfo = function(){
            console.log($scope.infoUser);
            $http({method: 'GET', url: '/reg', data: $scope.infoUser})
                .then(function(data){
                    console.log("Inserted to DB");
                })
                .catch(function() { console.log("Unsuccessful") });
        };


    }]);
