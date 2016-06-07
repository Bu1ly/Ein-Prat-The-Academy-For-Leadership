angular.module('mainApp')
    .controller('RegisterCtrl', ['$http','$scope', function($http,$scope) {

        $scope.user = {
            firstName: "",
            lastName: "",
            Email: "",
            identity: "",
            sis: ""
        };

        $scope.data = {
            confirmPassword : ''
        };

        var clearData = function() {
            $scope.data = {};
        };






        $scope.newUser = function(){

            if($scope.user.sis  !==  $scope.data.confirmPassword) {
                //here you need to send him back to fill signUP request(same page)
                console.log('password does not match');
                alert('password does not match or too short');
                clearData();
                return;
            }


            console.log($scope.user);
            $http({method: 'POST', url: '/reg', data: $scope.user})
                .then(function(data){
                    console.log("Inserted to DB");
                    alert('הרשמה בוצעה בהצלחה');
                })
            .catch(function() { console.log("Unsuccessful") });
        };


    }]);
