(function() {
    'use strict';
    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = [];
    /* @ngInject */
    function AppCtrl() {
        var vm = this;
        vm.todo = 'lo';
        vm.que = 'ponga';
        vm.aca = 'anda';
        activate();
        ////////////////
        function activate() {
        }
    }
})();
