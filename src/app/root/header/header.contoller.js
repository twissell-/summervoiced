(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$cookies'];

    /* @ngInject */
    function HeaderCtrl($cookies) {
        var vm = this;
        vm.user = {
          name: ''
        };

        activate();
        ////////////////
        function activate() {
          vm.user.name =  $cookies.get('userName');

        }
    }
})();
