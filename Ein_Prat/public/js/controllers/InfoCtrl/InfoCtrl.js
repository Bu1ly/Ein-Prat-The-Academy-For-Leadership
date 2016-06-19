
angular.module('mainApp')
    .controller('InfoCtrl', ['$http','$scope','$rootScope', function($http,$scope, $rootScope) {
        
        
        $rootScope.infoUser = {
             firstName: "",
             lastName: "",
             Email: "",
             identity: "",
            // sis: ""
            birthday: "",
            gender: "",
            status: "",
            //address: "",
            homeAdd: "",
            homeNum: "",
            homeTown: "",
            zipCode: "",
            army_type: "",
            army_unit: "",
            keva_ktsuna: "",
            recrue_date: "",
            release_date: "",
            army_more: "",
            trip_continent: "",
            trip_country: "",
            trip_year: "",
            trip_recommendation: "",
            courses: "",
            courses_more: "",
            knowledge_type: "",
            knowledge: "",
            knowledge_diff: ""
        };

        /*// add later to address string
        $scope.homeAdd= "";
        $scope.homeNum= "";
        $scope.homeTown= "";
        $scope.zipCode= "";*/

        $scope.trip_else =  false;
        $scope.knowledge_else = false;
        

        // updateInfo is the bottom!
        $scope.updateInfo = function(){

        $http({method: 'POST', url: '/change_info', data: $scope.infoUser})
            .then(function(data){
                console.log("Inserted to DB");
                $scope.modalText = {
                    headline: "Register",
                    text: "עדכון בוצעה בהצלחה"
                };
                $('#modal').modal('show')
            })
            .catch(function() { console.log("Unsuccessful") });

        };

        //console.log($scope.infoUser);

    }]);
