//area button funcunallty
'use strict';



function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function addnew() {
    document.getElementById('add').style.display = "block";

}



//--------------------Dynamic Table Controller---------------------------

angular.module('mainApp')
    .controller('jobCtrl', ['$scope', 'orderByFilter', function($scope,orderBy) {

        $scope.jobs =[];

        

        $scope.newJob = {
            date: "",
            position: "",
            location: "",
            CVs:""
        };

        $scope.addJob = function() {
            $scope.jobs.push($scope.newJob);
            $scope.newJob = {
                date: "",
                position: "",
                location: "",
                CVs:""
            };

        };



        $scope.sort = function() {
            $scope.jobs = orderBy($scope.jobs, 'date', true);
        };





}]);

