(function() {
    'use strict';

    angular
        .module('app.anilist.user')
        .config(configure);

    configure.$inject = ['$stateProvider', '$httpProvider'];

    /* @ngInject */
    function configure($stateProvider, $httpProvider){
      // $httpProvider.defaults.useXDomain = true;
      // $httpProvider.defaults.withCredentials = true;
      // delete $httpProvider.defaults.headers.common["X-Requested-With"];
      // $httpProvider.defaults.headers.common["Accept"] = "application/json";
      // $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
      $stateProvider.state('root.user', {
        url: '^/user',
        views: {
          "content@root": {
            templateUrl: 'modules/anilist/user/user.tpl.html',
            controller: 'UserCtrl',
            controllerAs: 'vm'
          }
        }
      });
    }

})();
