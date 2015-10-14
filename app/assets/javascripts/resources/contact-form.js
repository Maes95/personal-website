angular.module('app')
  .factory('ContactForm', ['$resource', function ContactFormFactory($resource) {
    return $resource('/api/contact_form/:id', {}, {
      update: {
        method: "PUT"
      }
  });
}]);
