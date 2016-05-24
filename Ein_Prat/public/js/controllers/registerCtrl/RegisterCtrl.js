angular.module('mainApp')
    .controller('RegisterCtrl', [function($http) {
        this.user = {};
        this.users = [];

        this.newUser = function(){
            console.log(this.user);
            $http({method: 'POST', url: '/reg', data: this.user})
                .then(function(data){
                    this.users.push(this.user);
                    this.user = {};

                });
        };
    }]);
