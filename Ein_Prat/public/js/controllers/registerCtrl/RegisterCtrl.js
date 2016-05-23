angular.module('mainApp')
    .controller('RegisterCtrl', [function() {
        this.id = function(user){
            $http({method: 'POST', url: '/notes', data: note});
        };
    }]);
