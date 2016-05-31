(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('NavbarCtrl', NavbarCtrl);
    
    NavbarCtrl.$inject = [];
    
    /* @ngInject */
    function NavbarCtrl() {
        var vm = this;
        vm.title = 'NavbarCtrl';
        activate();
        ////////////////
        function activate() {
        }
    }
})();