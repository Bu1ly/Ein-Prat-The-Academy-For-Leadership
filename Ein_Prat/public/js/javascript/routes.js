angular.module('mainApp')
.config(function($routeProvider){

    // RIGHT NAV
    $routeProvider.when('/home_page', {
        templateUrl: '/views/home_page.html'
    })
        .when('/senior_search', {
            templateUrl: '/views/senior_search.html'
        })
        .when('/studies', {
            templateUrl: '/views/studies.html'
        })
        .when('/sales', {
            templateUrl: '/views/sales.html'
        })
        .when('/job_offers', {
            templateUrl: '/views/job_offers.html'
        })
        .when('/events', {
            templateUrl: '/views/events.html'
        })
        .when('/blank_page', {
            templateUrl: '/views/blank_page.html'
        })
        .when('/info', {
            templateUrl: '/views/info.html'
        })

        // UPPER NAV
        .when('/change_info', {
            templateUrl: '/views/blank_page.html'
        })
        .when('/app_settings', {
            templateUrl: '/views/app_settings.html'
        })
        .when('/', {
            templateUrl: 'views/bird.html'
        })
        .otherwise({redirectTo: 'views/404.html'});


});
