//area button funcunallty
'use strict';



function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//--------------------Filter Controller---------------------------


//var app = angular.module('app', []);
//app.controller('jobCtrl', ['$scope', function($scope) {
//    
//    $scope.jobs=[];
//    
////    $scope.addJob = function() {
////        $scope.jobs.push({'position'.$scope.position, 'category'.$scope.category,'location'.$scope.location, 'CVs'.$scope.CVs});
////    }
//    
//    $scope.addJob = function() {
//      
//        $scope.jobs.push({ position: $scope.position, category: $scope.category, location: $scope.location, CVs: $scope.CVs });
//    };
//    
//    $scope.position='';
//    $scope.category='';
//    $scope.location='';
//    $scope.CVs='';
//        
//    }]);


var app = angular.module('job', []);
app.controller('jobCtrl', ['$scope', function($scope) {

    $scope.jobs = [
        { 'position':'slut', 'category': 'Viral',
            'location':'jerusalem',
            'CVs': '123-2343-44'
        }
    ];

    $scope.addJob = function() {

//        if($scope.newcontact.id == null) {
//        //if this is new contact, add it in contacts array
//        $scope.newcontact.id = uid++;
//        $scope.contacts.push($scope.newcontact);
//        } else {
//        //for existing contact, find this contact using id
//        //and update it.
//        for(i in $scope.contacts) {
//            if($scope.contacts[i].id == $scope.newcontact.id) {
//            $scope.contacts[i] = $scope.newcontact;
//            }
//        }                
//        }
//         
//        //clear the add contact form
//        $scope.newcontact = {};
    };

}]);

