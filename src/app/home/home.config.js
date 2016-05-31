(function() {
    'use strict';

    angular
        .module('app.home')
        .config(configure);

    configure.$inject = ['$stateProvider'];

    /* @ngInject */
    function configure($stateProvider){
      $stateProvider.state('root.home', {
        url: '^/home',
        views: {
          "content@root": {
            templateUrl: 'home/home.tpl.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
      });
    }

})();