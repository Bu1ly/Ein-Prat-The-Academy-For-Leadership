angular.module('mainApp')
    .controller('LogInCtrl', [function($http) {
        this.checkId = function(user){
            $http({method: 'GET', url: '/', data: user.id});
        };
    }]);
