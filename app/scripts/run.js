(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
          templateUrl: '/templates/cookie.html',
          controller: 'CookieCtrl as cookie',
          size: 'sm'
      })
      .result.then(function(username) {
          $cookies.put('username', username);
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();