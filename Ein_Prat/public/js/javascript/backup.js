    (function(){
        var daily_pages = [
            {
                name: '1',
                description: 'מסכת סוכה דף ב עמוד ב',
                images: [
                            {
                            full: 'img/1.jpg',
                            }
                        ],
                reviews: [],
            }
        ];
    var app = angular.module('dPages', [ ]);
    
//    Page Controller
    app.controller('DailyPageController', function(){
        this.pages = daily_pages;
    });
    
//    Review Controller
    app.controller('ReviewController',function(){
    this.review = {};
    this.pages = daily_pages;
        
    this.addReview = function(page){
        
      page.reviews.push(this.review);
        
      this.review={};
    };
    
  });
    
    
})();