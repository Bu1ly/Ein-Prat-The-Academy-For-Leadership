angular.module('mainApp')
.config(function($routeProvider){

    // RIGHT NAV
    $routeProvider.when('/home_page', {
        templateUrl: 'views/home_page.html',
        controller: 'PageCtrl',
        controllerAs: 'PageCtrl'
    })
        .when('/senior_search', {
            templateUrl: 'views/senior_search.html',
            controller: 'FindCtrl',
        })
        .when('/studies', {
            templateUrl: 'views/studies.html'
        })
        .when('/sales', {
            templateUrl: 'views/sales.html'
})
        .when('/job_offers', {
            templateUrl: 'views/job_offers.html',
            controller: 'jobCtrl',
            controllerAs: 'jobCtrl'
        })
        .when('/job_list', {
            templateUrl: 'views/job_list.html',
            controller: 'jobCtrl'
           
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
            // templateUrl: 'views/app_settings.html'
            templateUrl: 'views/404.html'
        })
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
