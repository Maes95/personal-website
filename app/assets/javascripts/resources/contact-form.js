angular.module('app')
  .factory('ContactForm', function ContactFormFactory($resource) {
    return $resource('/api/contacts/:id', {}, {
      update: {
        method: "PUT"
      }
  });
});
