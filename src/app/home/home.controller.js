(function() {
    'use strict';
    angular
        .module('app.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'UserService'];

    /* @ngInject */
    function HomeCtrl($scope, userService) {
        var vm = this;

        vm.scrCfg = {
          title: 'Dashboard',
          subtitle: ''
        };

        activate();
        ////////////////
        function activate() {
          $scope.rootCtrl.scrCfg = vm.scrCfg;
          userService.getAnimeList();
          vm.comments = 23;
        }
    }
})();
