angular.module('mainApp')
    .controller('SuperCtrl', ['$http','$scope', function($http,$scope) {


        $scope.event={
            name: "",
            date: "",
            place: "",
            price: "",
            picture: []
        },

        $scope.user={
            firstName: "",
            lastName: "",
            identity: "",
            year: ""
        },

        $scope.message = "";
        $scope.page = {};


        $scope.show_delete = false;
        $scope.show_event = false;
        $scope.show_messages = false;
        $scope.show_page = false;

        $scope.deleteUser = function(){
        };

        $scope.makeEvent = function(){
        };

        $scope.sendMessage = function(){
        };

        $scope.deleteUser = function(){
        };

        $scope.searchUser = function(){
        };


    }]);
