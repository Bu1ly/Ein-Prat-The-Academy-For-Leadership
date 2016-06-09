// //area button funcunallty
// 'use strict';
//
//
//
// function drop() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
//
// function addnew() {
//     document.getElementById('add').style.display = "block";
//
// }
//
//
//
// //--------------------Dynamic Table Controller---------------------------
//
// var app = angular.module('mainApp', []);
//     app.controller('jobCtrl', ['$scope', function($scope) {
//
//     $scope.jobs = [
//         { 'position':'eng', 'category': 'hitech',
//             'location':'jerusalem',
//             'CVs': '123-2343-44'
//         }
//     ];
//
//
//         $scope.addJob = function() {
//             $scope.jobs.push({'position':$scope.position, 'category':$scope.category,'location':$scope.location, 'CVs':$scope.CVs});
//         }
//
//         $scope.addJob = function() {
//
//             $scope.jobs.push({ position: $scope.position, category: $scope.category, location: $scope.location, CVs: $scope.CVs });
//
//             $scope.position='';
//             $scope.category='';
//             $scope.location='';
//             $scope.CVs='';
//         };
//
//
// }]);
//
