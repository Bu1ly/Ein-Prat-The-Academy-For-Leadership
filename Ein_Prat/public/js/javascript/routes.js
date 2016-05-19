angular.module('mainApp')
.config(function($routeProvider){

    $routeProvider.when('/events', {
        templateUrl: 'views/events.html'
    })
})