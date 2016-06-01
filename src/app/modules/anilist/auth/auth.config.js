(function() {
    'use strict';

    angular
        .module('app.anilist.auth')
        .config(configure);

    configure.$inject = ['$stateProvider'];

    /* @ngInject */
    function configure($stateProvider){
      $stateProvider.state('root.auth', {
        url: '^/auth',
        views: {
          "content@root": {
            templateUrl: 'modules/anilist/auth/auth.tpl.html',
            controller: 'AuthCtrl',
            controllerAs: 'vm'
          }
        }
      });
    }

})();
