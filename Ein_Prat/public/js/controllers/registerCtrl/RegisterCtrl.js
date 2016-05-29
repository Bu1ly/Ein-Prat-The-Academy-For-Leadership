angular.module('mainApp')
    .controller('RegisterCtrl', ['$http', function($http) {
        this.user = {};
        this.users = [];

        this.newUser = function(){
            console.log(this.user);
            $http({method: 'POST', url: '/reg', data: this.user})
                .then(function(data){
                    console.log("Success, the users inside db should be: ");
                    this.users.push(this.user);
                    console.log(users);
                    this.user = {};

                })
            .catch(function() { console.log("Unsuccessful") });
        };
        // return user;
    }]);
