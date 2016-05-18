angular.module('dpages')
    .controller('ReviewController',function(){
    this.review = {};
    this.pages = daily_pages;
        
    this.addReview = function(page){
        
      page.reviews.push(this.review);
        
      this.review={};
    };
    
  });