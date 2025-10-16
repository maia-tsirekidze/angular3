// (function(){
//   angular
//   .module("myapp",["ngRoute"])
//   .config(['$routeProvider','$locatProvider',function($routeProvider,$locatProvider){
//     $locatProvider.hashPrefix('');
//     $routeProvider
//     .when('/',{
//         templateUrl:'views/home.html',
//         controller: 'Homectrl'
//     })
//      .when('/ about',{
//         templateUrl:'views/about.html',
//         controller: 'Aboutctrl'
//     })
//     .otherwise({redirectTo: '/'});

//   }])

// .controller('Homectrl',["$scope", function($scope){
//     $scope.message='მოგესალმებით მთავარ გვერდზე!'

// }])
// .controller('Aboutctrl',["$scope", function($scope){
//     $scope.message='მოგესალმებით about  გვერდზე'
    
// }])

// })


(function() {
  'use strict';

  angular
    .module('myApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
     
      $locationProvider.hashPrefix('');

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({ redirectTo: '/' });
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {
      $scope.message = 'მოგესალმებით მთავარ გვერდზე!';
    }])
    .controller('AboutCtrl', ['$scope', function($scope) {
      $scope.message = 'ეს არის About გვერდი.';
    }]);

})();