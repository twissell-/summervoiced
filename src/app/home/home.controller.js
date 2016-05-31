(function() {
    'use strict';
    angular
        .module('app.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope'];

    /* @ngInject */
    function HomeCtrl($scope) {
        var vm = this;

        vm.scrCfg = {
          title: 'Dashboard',
          subtitle: ''
        };

        activate();
        ////////////////
        function activate() {
          $scope.rootCtrl.scrCfg = vm.scrCfg;
          vm.comments = 23;
        }
    }
})();
