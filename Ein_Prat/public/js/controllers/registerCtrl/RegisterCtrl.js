
angular.module('mainApp')
    .controller('RegisterCtrl', ['$http','$scope', function($http,$scope) {

        $scope.user = {
            firstName: "",
            lastName: "",
            Email: "",
            identity: "",
            sis: ""
        };
        
        //===============================


        $scope.find({}, function (err, users) {
            var userMap = {}; //return object

            //fill up the object
            users.forEach(function(user) {
                userMap[user._id] = user;
            });
            //    return the users object
            console.log(JSON.stringify(userMap));
        });

        $scope.findOne = function() {
            $scope.income = Incomes.get({
                incomeId: $stateParams.incomeId
            });

//===============================



        $scope.newUser = function(){
            console.log($scope.user);
            $http({method: 'POST', url: '/reg', data: $scope.user})
                .then(function(data){
                    console.log("Inserted to DB");
                })
            .catch(function() { console.log("Unsuccessful") });
        };


    }]);
