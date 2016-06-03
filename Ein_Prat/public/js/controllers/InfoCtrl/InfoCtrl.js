
angular.module('mainApp')
    .controller('InfoCtrl', ['$http','$scope', function($http,$scope) {

        $scope.infoUser = {
            // firstName: "",
            // lastName: "",
            // Email: "",
            // identity: "",
            // sis: ""
            birthday: "",
            gender: "",
            address: "",
            status: "",
            army_type: "",
            army_unit: "",
            keva_ktsuna: "",
            recrue_date: "",
            release_date: "",
            army_more: "",
            trip_place: "",
            trip_year: "",
            trip_more: "",
            courses: "",
            courses_more: "",
            knowledge_type: "",
            knowledge: "",
            knowledge_more: "",
        };

        // add later to address string
        $scope.homeAdd= "";
        $scope.homeNum= "";
        $scope.homeTown= "";
        $scope.zipCode= "";

        $scope.trip_else =  false;
        $scope.knowledge_else = false;
        

        $scope.updateInfo = function(){
            console.log($scope.infoUser);
            $http({method: 'POST', url: '/reg', data: $scope.infoUser})
                .then(function(data){
                    console.log("Inserted to DB");
                })
                .catch(function() { console.log("Unsuccessful") });
        };


    }]);
