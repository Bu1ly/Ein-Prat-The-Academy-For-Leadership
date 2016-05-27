angular.module('mainApp')
    .controller('pageCtrl', ['$http', function($http) {
        this.page = {};
        this.review = {};
        this.reviews = [];

        this.getPage = function(){
            $http({method: 'GET', url: '/page', data: this.page})
                .then(function(data){
                    return this.page;
                });
        };
         this.newReview = function(){
             $http({method: 'POST', url: '/rev', data: this.review})
             this.reviews.push(this.review);
             this.review = {};

         };
    }]);
