angular.module('app')
  .factory('ContactForm', function ContactFormFactory($resource) {
    return $resource('/api/contact_form/:id', {}, {
      update: {
        method: "PUT"
      }
  });
});
