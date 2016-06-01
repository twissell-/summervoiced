(function() {
    'use strict';
    angular
        .module('app.anilist.user')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', 'UserService'];

    /* @ngInject */
    function UserCtrl($scope, userService) {
        var vm = this;

        vm.scrCfg = {
          title: 'Dashboard',
          subtitle: ''
        };

        activate();
        ////////////////
        function activate() {
          $scope.rootCtrl.scrCfg = vm.scrCfg;
          //vm.user = userService.getCurrentUser();
        }
    }
})();
