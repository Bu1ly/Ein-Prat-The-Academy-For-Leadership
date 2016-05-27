angular.module('mainApp')
    .controller('LogInCtrl', ['$http', function($http) {
        // this.user = {};
        // this.users = [];

        this.checkUser = function(){
            console.log(this.user);
            $http({method: 'GET', url: '/log', data: this.user})
                // .then(function(data){
                    // this.users.push(this.user);
                    // this.user = {};
                .then(function(data){
                    console.log("{{user.name}}" + "is exists!")

                });
        };
    }]);
