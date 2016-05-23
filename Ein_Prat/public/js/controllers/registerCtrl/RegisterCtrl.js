angular.module('mainApp')
    .controller('RegisterCtrl', [function($http) {
        this.id = function(user){
            $http({method: 'POST', url: '/notes', data: user.id});
        };
    }]);
