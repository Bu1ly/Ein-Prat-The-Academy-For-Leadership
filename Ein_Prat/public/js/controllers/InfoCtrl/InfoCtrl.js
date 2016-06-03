
angular.module('mainApp')
    .controller('InfoCtrl', ['$http','$scope', function($http,$scope) {

        $scope.infoUser = {
            // firstName: "",
            // lastName: "",
            // Email: "",
            // identity: "",
            // sis: ""
            address: "",
            birthday: "",
            gender: "",
            status: "",
            army_type: "",
            army_unit: "",
            keva_ktsuna: "",
            recrue_date: "",
            release_date: "",
            army_more: "",
            trip_place: "",
            trip_year: "",
            trip_suggestions: "",
            courses: "",
            knowledge: "",
            knowledge_more: "",
        };

        $scope.updateInfo = function(){
            console.log($scope.infoUser);
            $http({method: 'POST', url: '/reg', data: $scope.infoUser})
                .then(function(data){
                    console.log("Inserted to DB");
                })
                .catch(function() { console.log("Unsuccessful") });
        };


    }]);
