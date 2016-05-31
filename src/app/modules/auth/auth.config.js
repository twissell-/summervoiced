(function() {
    'use strict';

    angular
        .module('app.auth')
        .config(configure);

    configure.$inject = ['$stateProvider'];

    /* @ngInject */
    function configure($stateProvider){
      $stateProvider.state('root.auth', {
        url: '^/auth',
        views: {
          "content@root": {
            templateUrl: 'modules/auth/auth.tpl.html',
            controller: 'AuthCtrl',
            controllerAs: 'vm'
          }
        }
      });
    }

})();
