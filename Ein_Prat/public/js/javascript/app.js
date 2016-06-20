var mainApp = angular.module('mainApp', ['ngRoute', 'ngMessages'])

    .directive('modal', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/modal-template.html',
            scope:{
                modal: '='
            }
        }
    })

    // .directive('ex', function(){
    //     return {
    //         restrict: 'EA',
    //         templateUrl: 'views/modal-template.html',
    //         scope:{
    //             password: '=',
    //             email : '=',
    //             submitData : '&'
    //         },
    //         controller :
    //
    //             scope.submitData(scope.password, scope.email),
    //     }
    //
    //
    // });

$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});






mainApp.controller("usernameController",function($scope){
        $scope.name="גרשון גראוס";
});

$('#myModal').on('hide.bs.modal', function (e) {
    var button = e.relatedTarget;
    if (button != null)
    {
        alert("Launch Button ID='" + button.id + "'");
    }
})


$('#myModal2').click(function() {
    alert("גרשון גראוס היקר, נא להרשם!");

    // $('#myModal').modal('hide');
})
//
// $('#myModalSave').click(function() {
//     alert("התחברת בהצלחה   - כמובן שעדיין אין בדיקה אמיתית מול השרת, צריך לסדר עוד");
//      $('#myModal').modal('hide');
// });

$('#myModalexit').click(function() {
    
     $('#myModal').modal('hide');
});

// var mainApp = angular.module('mainApp', []);
angular.module('mainApp').controller('igCtrl',['$http','$scope','$rootScope', function ($http,$scope,$rootScope) {

    $rootScope.user = {
        identity: "",
        sis: "",
        firstName: "",
        lastName: "",
        Email: ""
    };

    $scope.checkUser = function () {
        console.log($scope.user);
        $http({method: 'POST', url: '/log', data: $scope.user})
            .then(function (data) {
                /// $scope.user.id = data;  ????? why???
                $rootScope.infoUser = data;

                console.log("id exists!");
                $scope.modalText = {
                    headline: "LogIn",
                    text: "התחברת בהצלחה"
                };
                window.alert("התחברת בהצלחה");
                $('#myModal').modal('hide');
                // $('#modal').modal('show')
                // <a href="#" data-toggle="modal" data-target="#login-modal">התחבר</a>
            })
            .catch(function () {
                $scope.modalText = {
                    headline: "LogIn",
                    text: "פרטים לא נכונים"
                };
                // $('#modal').modal('show')
                window.alert("פרטים לא נכונים");
                console.log("Unsuccessful login")
            });
        // $('#myModal').modal('hide');
    };


    //////register controller ////

    $scope.user_reg = {
        firstName: "",
        lastName: "",
        Email: "",
        identity: "",
        sis: ""
    };

    $scope.data = {
        confirmPassword: ''
    };

    var clearData = function () {
        $scope.data = {};
    };


    //newUser is the bottom!
    $scope.newUser = function () {

        if($scope.user_reg.identity.localeCompare("")==0)
        {
            alert("אנא הכנס תעודת זהות");
            return;
        }


        if ($scope.user_reg.sis !== $scope.data.confirmPassword) {
            //here you need to send him back to fill signUP request(same page)
            console.log('password does not match');
            $scope.modalText = {
                headline: "Register",
                text: "סיסמאות לא תואמות"
            };
            // $('#modal').modal('show')
            window.alert("סיסמאות לא תואמות");
            clearData();
            return;
        }

        ///check if the id exists in the db
        $http({method: 'GET', url: '/user/' + $scope.user_reg.identity})
            .then(function (params) {
                console.log("id exists in the DB");
                $scope.modalText = {
                    headline: "Register",
                    text: "המשתמש קיים כבר במערכת"
                };
                //$('#modal').modal('show')
                window.alert("המשתמש קיים כבר במערכת");

            })
            .catch(function () {
                console.log("id dont exists in DB, register new user ")


                console.log($scope.user);

                $http({method: 'POST', url: '/reg', data: $scope.user_reg})
                    .then(function (data) {
                        $rootScope.user_information = $scope.user_reg;
                        console.log("Inserted to DB");
                        $scope.modalText = {
                            headline: "Register",
                            text: "הרשמה בוצעה בהצלחה"
                        };
                        //  $('#modal').modal('show')
                        window.alert("הרשמה בוצעה בהצלחה, ניתן כעת להתחבר למערכת");
                        $('#myModal').modal('hide');
                        window.location.href = "/#/change_info";
                    })
                    .catch(function () {
                        console.log("Unsuccessful")
                    });
            });
    };


    /////////////////////////////

}]);

