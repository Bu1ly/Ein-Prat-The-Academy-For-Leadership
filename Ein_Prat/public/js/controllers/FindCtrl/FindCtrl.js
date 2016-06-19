/**
 * Created by G.G on 18/06/2016.
 */

angular.module('mainApp')
    .controller('FindCtrl', ['$http','$scope', function($http,$scope) {

        $scope.searchUser = {
            firstName : "",
            lastName : "",
            homeTown: "",
            army_type: "",
            army_unit: "",
            keva_ktsuna: "",
            trip_continent: "",
            knowledge_type: "",
            knowledge: "",
            courses: ""
        };

        $scope.searchSenior = function(){

            $http({method: 'POST', url: '/senior_search', data: $scope.searchUser})
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