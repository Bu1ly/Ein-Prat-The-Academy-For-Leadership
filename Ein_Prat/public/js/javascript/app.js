
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

$('#myModalSave').click(function() {
    alert("התחברת בהצלחה   - כמובן שעדיין אין בדיקה אמיתית מול השרת, צריך לסדר עוד");
     $('#myModal').modal('hide');
});

// var mainApp = angular.module('mainApp', []);

//////////////////////////////////////////////////////////////////////// TEMP

angular.module('mainApp').controller('igCtrl', function ($scope) {



    $scope.email = "";
    $scope.pwd = "";
    $scope.loggedIn = false;
    $scope.loggingIn = false;

    $scope.showLogin = function () {
        $scope.loggingIn = true;
    };

    $scope.logout = function () {
        // do your logout logic
        $scope.user = null;
        $scope.loggedIn = false;
    };

    $scope.login = function () {
        // do your login logic
        $scope.loggingIn = false;
        $scope.loggedIn = true;
    };
});

mainApp.directive('igLogin', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div>' +
        '  <div class="modal fade" id="loginModal" tabindex="-1" + role = "dialog" aria-labelledby = "myModalLabel" aria-hidden = "true" > ' +
        '    <div class = "modal-dialog" > ' +
        '      <form name = "form" ng - submit = "submit()" > ' +
        '        <div class = "modal-content" > ' +
        '          <div class = "modal-header" > ' +
        '            <button type="button" class = "close" data-dismiss="modal" aria-hidden="true" ng-click="cancel()" > Cancel </button>' +
        '              <h3> </h3 > ' +
        '          </div>' +
        '          <div class="modal-body">' +
        '            <table border="0"><tr><td>Email: </td><td><input type="email" ng-model="email"></input > </td></tr> ' +
        '            <tr><td>Password: </td><td><input type = "password" ng-model = "pwd" > </input></td></tr>' +
        '            <tr><td colspan="2"><input type="submit" class="btn btn-primary" id="submit" ng-click="submit()" value="Login"></input ></td></tr></table> ' +
        '          </div>' +
        '        </div > ' +
        '      </form>' +
        '    </div > ' +
        '  </div>' +
        '</div > ',


        controller: function ($scope) {

            $scope.submit = function() {
                $scope.login();
                $("#loginModal").modal('hide');
            };

            $scope.cancel = function() {
                $scope.loggingIn = false;
                $("#loginModal").modal('hide');
            };

            $scope.$watch('loggingIn', function() {
                if ($scope.loggingIn) {
                    $("#loginModal").modal('show');
                };
            });
        }
    };


});

