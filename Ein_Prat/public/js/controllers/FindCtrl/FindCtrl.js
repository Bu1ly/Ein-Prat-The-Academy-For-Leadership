/**
 * Created by G.G on 18/06/2016.
 */

//var result = require("./../../../../server/routes/database");

angular.module('mainApp')
    .controller('FindCtrl', ['$http','$scope', function($http,$scope) {

        $scope.searchUser = {
            firstName : "",
            lastName : "",
            homeTown: "",
            army_type: "",
            trip_continent: "",
            knowledge_type: "",
            knowledge: ""
        };
        
        
        
        

        $scope.searchSenior = function(){

            ///missing parts check

            if($scope.searchUser.firstName.localeCompare("")==0
                |  $scope.searchUser.lastName.localeCompare("")==0 |  $scope.searchUser.homeTown.localeCompare("")==0 |
                $scope.searchUser.army_type.localeCompare("")==0| $scope.searchUser.trip_continent.localeCompare("")==0 |
                $scope.searchUser.knowledge_type.localeCompare("")==0 | $scope.searchUser.knowledge.localeCompare("")==0) {
                console.log('something missing');
                $scope.modalText = {
                    headline: "Senior Search",
                    text: "אחד או יותר פרטים חסרים"
                };
                //$('#modal').modal('show')
                alert("אחד או יותר פרטים חסרים");  ///need modal here
                return;

            }
            
            

            $http({method: 'POST', url: '/senior_search', data: $scope.searchUser})
                .then(function(data){
                    console.log("\n\nSEARCH.....\n\n");
                    console.log(data);
                    $scope.modalText = {
                        headline: "Search",
                        text: "חיפוש בוצע בהצלחה"
                    };
                    $('#modal').modal('show')
                })
                .catch(function() { console.log("Unsuccessful") });

        };

        
    }]);