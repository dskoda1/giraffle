(function() {
    var app = angular.module('donation-directives', []);

    //Controller and Directive for the donation page
   
    app.directive('donationPage', function(){
        return{
            restrict: 'E',
            templateUrl: '/partials/donation-page.html',
            controller: function(){
                this.donations = donations;
                
                
            },
            controllerAs: 'donationCtrl'
        };
    })

    //Controller and Directive for the donation form
    app.directive('donationForm', function() {
        return {
            restrict: 'E',
            templateUrl: '/partials/donation-form.html',
            controller: function(){
                this.addDonation = function(parent){
                    parent.donations.push({
                        amount: this.amount,
                        email: this.email
                    });
                    this.amount = "";
                    this.email = "";
                };
                
                this.checkDonationAmount = function(){
                    if(this.amount !== undefined){
                        return false;
                    }
                    else{
                        return true;
                    }
                }
            },
            controllerAs: 'df'
        };
    });
    
    //Controller and directive for the recent donations
    app.directive('recentDonations', function(){
       return {
           restrict: 'E',
           templateUrl: '/partials/recent-donations.html',
           controller: function(){
           },
           controllerAs: 'rd'
       } 
        
    });
    
    

 var donations = [
        
        {
            amount: '5.00',
            email: 'dvdskoda@yahoo.com'
            
        },
        {
            amount: '10.50',
            email: 'dskoda1@binghamton.edu'
        }
        
        
        
        ];

})();