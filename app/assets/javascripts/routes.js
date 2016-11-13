angular.module('app')
.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'pages/landing/index.html',
        controller: 'LandingController'
      })

      .when('/wome', {
        templateUrl: 'pages/landing/womehome.html',
        controller: 'LandingController'
      })

      .when('/results', {
        templateUrl: 'pages/landing/womeresults.html',
        controller: 'LandingController'
      })
      
      .when('/detail', {
        templateUrl: 'pages/landing/womedetail.html',
        controller: 'LandingController'
      })

      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
      return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
