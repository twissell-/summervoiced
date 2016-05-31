(function() {
    'use strict';
    angular
        .module('app.auth')
        .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['$scope', '$cookies', 'AuthService'];

    /* @ngInject */
    function AuthCtrl($scope, $cookies, authService) {
        var vm = this;
        vm.scrCfg = {
          title: 'Authentication',
          subtitle: ''
        };

        vm.authenticate = authenticate;
        vm.reset = reset;

        activate();
        ////////////////
        function activate() {
          $scope.rootCtrl.scrCfg = vm.scrCfg;
          vm.pinUrl = authService.getPinUrl();

        }

        function authenticate(pin) {
          vm.reset();
          vm.submited = true;
          authService.authenticateByPin(pin)
          .then(function (response) {
            $cookies.put('accessToken', response.access_token);
            $cookies.put('refreshToken', response.refresh_token);
            vm.success = true;
          }, function (reason) {
            vm.hasErrors = true;
            vm.submited = false;
          });
        }

        function reset() {
          vm.show = true;
          vm.submited = false;
          vm.hasErrors = false;
          vm.success = false;
        }
    }
})();
