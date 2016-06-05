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

        //===============================
        //
        //
        // $scope.find({}, function (err, users) {
        //     var userMap = {}; //return object
        //
        
        //     //fill up the object
        //     users.forEach(function(user) {
        //         userMap[user._id] = user;
        //     });
        //     //    return the users object
        //     console.log(JSON.stringify(userMap));
        // });
        //
        // $scope.findOne = function() {
        //     $scope.income = Incomes.get({
        //         incomeId: $stateParams.incomeId
        //     });

//===============================



        $scope.newUser = function(){

            if($scope.user.sis  !==  $scope.data.confirmPassword) {
                //here you need to send him back to fill signUP request(same page)
                console.log('password does not match');
                alert('password does not match');
                clearData();
                return;
            }


            console.log($scope.user);
            $http({method: 'POST', url: '/reg', data: $scope.user})
                .then(function(data){
                    console.log("Inserted to DB");
                })
            .catch(function() { console.log("Unsuccessful") });
        };


    }]);
