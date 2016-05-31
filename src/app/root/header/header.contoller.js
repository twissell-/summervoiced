(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('HeaderCtrl', HeaderCtrl);
    
    HeaderCtrl.$inject = [];
    
    /* @ngInject */
    function HeaderCtrl() {
        var vm = this;
        vm.title = 'HeaderCtrl';
        activate();
        ////////////////
        function activate() {
        }
    }
})();