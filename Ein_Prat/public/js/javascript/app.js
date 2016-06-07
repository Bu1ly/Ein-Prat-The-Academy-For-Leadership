
angular.module('mainApp', ['ngRoute', 'ngMessages'])
    .directive('modal', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/modal-template.html',
            scope:{
                modal: '='
            }
        }
    });

// h