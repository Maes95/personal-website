angular.module('app')
.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    
      .when('/', {
        templateUrl: 'pages/landing/index.html'
      })

      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
      return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
