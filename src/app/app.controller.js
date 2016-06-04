(function() {
    'use strict';
    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = ['$cookies', 'AuthService'];
    /* @ngInject */
    function AppCtrl($cookies, authService) {
        var vm = this;

        activate();
        ////////////////
        function activate() {
            var refreshToken = $cookies.get('refreshToken');
            if (refreshToken) {
                authService.refreshAuthentication(refreshToken);
            }
        }
    }
})();
