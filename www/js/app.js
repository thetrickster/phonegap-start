var app = (function() {

  var auth;

  function init() {
    document.addEventListener('deviceready', function() {
    }, false);
      // FirebaseSimpleLogin demo instantiation
      var firebaseRef = new Firebase('https://fictionary.firebaseio.com');
      auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          var message = 'An error occurred.';
          navigator.notification.alert(message, function(){}, 'Failure!', 'Close');

        } else if (user) {
          // user authenticated with Firebase
          var message = 'User ID: ' + user.id + ', Provider: ' + user.provider;
          navigator.notification.alert(message, function(){}, 'Success!', 'Close');

          // Log out so we can log in again with a different provider.
          auth.logout();

        } else {
          // user is logged out
        }
      });
  }

  function login(provider) {
    if (auth) {
      auth.login(provider);  
    }
  }

  return {
    init: init,
    login: login
  };
})();