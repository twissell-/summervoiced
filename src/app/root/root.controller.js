(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = [];

    /* @ngInject */
    function RootCtrl() {
        var vm = this;

        vm.scrCfg = {
          title: 'Title',
          subtitle: 'Subtitle'
        };

        activate();
        ////////////////
        function activate() {

        }
    }
})();
