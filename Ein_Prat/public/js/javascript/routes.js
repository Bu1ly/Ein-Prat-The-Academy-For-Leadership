angular.module('mainApp')
.config(function($routeProvider){

    // RIGHT NAV
    $routeProvider.when('/home_page', {
        templateUrl: 'views/daily_page.html',
        controller: 'pageCtrl',
        controllerAs: 'pageCtrl'
    })
        .when('/senior_search', {
            templateUrl: 'views/senior_search.html'
        })
        .when('/studies', {
            templateUrl: 'views/studies.html'
        })
        .when('/sales', {
            templateUrl: 'views/sales.html'
        })
        .when('/job_offers', {
            templateUrl: 'views/job_offers.html'
        })
        .when('/events', {
            templateUrl: 'views/events.html'
        })
        .when('/blank_page', {
            templateUrl: 'views/blank_page.html'
        })
        .when('/info', {
            templateUrl: 'views/info.html'
        })

        // UPPER NAV
        .when('/change_info', {
            templateUrl: 'views/change_info.html',
            controller: 'InfoCtrl',
            controllerAs: 'InfoCtrl'
        })
        .when('/app_settings', {
            templateUrl: 'views/app_settings.html'
        })
        // .when('/', {
        //     templateUrl: 'views/home_page.html'
        // })
        .when('/', {
            templateUrl: 'views/home_page.html'
        })
        .when('/reg', {
            templateUrl: 'views/reg.html',
            controller: 'RegisterCtrl',
            controllerAs: 'regCtrl'
        })
        .when('/log', {
            templateUrl: 'views/log.html',
            controller: 'LogInCtrl',
            controllerAs: 'logCtrl'
        })
        .when('/404', {
            templateUrl: 'views/404.html'
        })
        .otherwise({redirectTo: '404'});


});
