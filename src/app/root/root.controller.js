(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = ['UserService'];

    /* @ngInject */
    function RootCtrl(userService) {
        var vm = this;

        vm.scrCfg = {
          title: 'Title',
          subtitle: 'Subtitle'
        };

        activate();
        ////////////////
        function activate() {
            userService.addListener(userLoginCb);
        }

        function userLoginCb(user) {
            vm.principal = user;
        }
    }
})();
