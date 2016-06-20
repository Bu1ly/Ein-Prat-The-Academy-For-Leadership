/*angular.module('mainApp')
    .controller('LogInCtrl', ['$http',    '$rootScope', function($http,$scope, $rootScope) {

    // $rootScope = its global -

    // var temp = $("#myModal").modal({show:'true',backdrop: 'static'});
    // console.log(temp);
    $rootScope.user = {
        identity: "",
        sis: "",
        firstName: "",
        lastName: "",
        Email: ""
    };

        $scope.checkUser = function(){
            $http({method: 'POST', url: '/log', data: $scope.user})
                .then(function(data){
                    $rootScope.infoUser = data.data;
                   console.log(data);
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
*/