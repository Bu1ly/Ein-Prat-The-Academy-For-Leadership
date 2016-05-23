angular.module('contactsApp')
    .controller('calendarCtrl' ,['$scope', function($scope){
        /*
         h = the height of the page
         */
        $scope.h = window.innerHeight-100 +'px';
        $scope.gros = "Hello Garus";
    }]);