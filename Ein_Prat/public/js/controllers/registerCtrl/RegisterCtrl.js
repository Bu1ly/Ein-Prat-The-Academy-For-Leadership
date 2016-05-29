angular.module('mainApp')
    .controller('RegisterCtrl', ['$http', function($http) {
        this.user = {};
        this.users = [];
        var user = this.user;
        var users_array = this.users;

        this.newUser = function(){
            console.log(this.user);
            $http({method: 'POST', url: '/reg', data: this.user})
                .then(function(data){
                    console.log("Success, the users inside db should be: ");
                    users_array.push(user);
                    console.log(users_array[0]);

                    this.user = {};

                })
            .catch(function() { console.log("Unsuccessful") });
        };
    }]);
