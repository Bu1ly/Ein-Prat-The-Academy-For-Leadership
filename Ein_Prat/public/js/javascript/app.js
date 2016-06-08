
var mainApp = angular.module('mainApp', ['ngRoute', 'ngMessages'])

    .directive('modal', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/modal-template.html',
            scope:{
                modal: '='
            }
        }
    }



    )


    mainApp.controller("mainController",function($scope){
        $scope.name="גרשון גראוס";  //// we need to connect this with the log in controoler 
});

