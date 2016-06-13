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





        //newUser is the bottom!
        $scope.newUser = function(){

            if($scope.user.sis  !==  $scope.data.confirmPassword) {
                //here you need to send him back to fill signUP request(same page)
                console.log('password does not match');
                $scope.modalText = {
                    headline: "Register",
                    text: "סיסמאות לא תואמות"
                };
                $('#modal').modal('show')
                clearData();
                return;
            }

            $http({method: 'GET', url: '/user/'+$scope.user.identity})
                .then(function(params){
                    console.log("id exists in the DB");
                    $scope.modalText = {
                        headline: "Register",
                        text: "ת״ז קיימת כבר"
                    };
                    $('#modal').modal('show')
                })
                .catch(function() { console.log("id dont exists in DB, register new user ")


            console.log($scope.user);
                    
            $http({method: 'POST', url: '/reg', data: $scope.user})
                .then(function(data){
                    console.log("Inserted to DB");
                    $scope.modalText = {
                        headline: "Register",
                        text: "הרשמה בוצעה בהצלחה"
                    };
                    $('#modal').modal('show')
                })
            .catch(function() { console.log("Unsuccessful") });
                });
        };


    }]);
