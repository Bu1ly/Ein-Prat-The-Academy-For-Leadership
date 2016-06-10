
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

