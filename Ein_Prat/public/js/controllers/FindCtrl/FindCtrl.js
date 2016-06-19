/**
 * Created by G.G on 18/06/2016.
 */

angular.module('mainApp')
    .controller('FindCtrl', ['$http','$scope','$rootScope', function($http,$scope, $rootScope) {

        $scope.searchUser = {
            name : "",
            last_name : "",
            city: "",
            armyType: "",
            armyUnit: "",
            kevaOrKtzuna: "",
            trip_continent: "",
            knowledgeType: "",
            academicEducation: "",
            courses: ""
        };

        $scope.searchSenior = function(){

            $http({method: 'GET', url: '/senior_search', data: $scope.searchUser})
                .then(function(data){
                    console.log("SEARCH.....");
                    $scope.modalText = {
                        headline: "Search",
                        text: "חיפוש בוצע בהצלחה"
                    };
                    $('#modal').modal('show')
                })
                .catch(function() { console.log("Unsuccessful") });

        };

        
    }]);