
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




    mainApp.controller("mainController",function($scope){
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

// var mainApp = angular.module('mainApp', []);
angular.module('mainApp').controller('igCtrl',['$http','$scope', function ($http,$scope) {

    console.log("test6");
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
                window.alert("התחברת בהצלחה");
                $('#myModal').modal('hide');
                // $('#modal').modal('show')
                // <a href="#" data-toggle="modal" data-target="#login-modal">התחבר</a>
            })
            .catch(function() {
                $scope.modalText = {
                    headline: "LogIn",
                    text: "פרטים לא נכונים"
                };
                // $('#modal').modal('show')
                window.alert("פרטים לא נכונים");
                console.log("Unsuccessful login") });
    };

}]);

