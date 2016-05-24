angular.module('mainApp')
    .controller('RegisterCtrl', [function($http) {
        this.newUser = function(user){
            $http({method: 'POST', url: '/', data: user});
        };
    }]);
