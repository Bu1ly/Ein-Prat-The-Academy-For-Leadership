angular.module('mainApp')
    .controller('LogInCtrl', ['$http','$scope', function($http,$scope) {

        var temp = $("#myModal").modal({show:'true',backdrop: 'static'});
        console.log(temp);
    $scope.user = {
        identity: "",
        sis: ""
    };

        $scope.checkUser = function(){
            console.log($scope.user);
            $http({method: 'POST', url: '/log', data: $scope.user})
                .then(function(data){
                   /// $scope.user.id = data;  ????? whay???
                    console.log("id exists!");
                    $scope.modalText = {
                        headline: "LogIn",
                        text: "התחברת בהצלחה"
                    };
                    $('#modal').modal('show')

                   // <a href="#" data-toggle="modal" data-target="#login-modal">התחבר</a>
                })
                .catch(function() {
                    $scope.modalText = {
                        headline: "LogIn",
                        text: "פרטים לא נכונים"
                    };
                    $('#modal').modal('show')
                                    console.log("Unsuccessful login") });
        };
    }]);
