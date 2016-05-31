(function() {
    'use strict';

    angular
        .module('app.root')
        .config(configure);

    configure.$inject = ['$stateProvider'];

    /* @ngInject */
    function configure($stateProvider){
      $stateProvider.state('root', {
        url: '/root',
        abstract: true,
        views: {
          "index@": {
            templateUrl: 'root/root.tpl.html',
            controller: 'RootCtrl',
            controllerAs: 'rootCtrl'
          },
          "header@root": {
            templateUrl: 'root/header/header.tpl.html',
            controller: 'HeaderCtrl',
            controllerAs: 'headerCtrl'
          },
          "navbar@root": {
            templateUrl: 'root/navbar/navbar.tpl.html',
            controller: 'NavbarCtrl',
            controllerAs: 'navbarCtrl'
          },
          "footer@root": {
            templateUrl: 'root/footer/footer.tpl.html',
            controller: 'FooterCtrl',
            controllerAs: 'footerCtrl'
          }
        }
      });
    }

})();
