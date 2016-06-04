(function() {
    'use strict';
    angular
        .module('app.anilist.auth')
        .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['$scope', '$cookies', 'AuthService', 'UserService'];

    /* @ngInject */
    function AuthCtrl($scope, $cookies, authService, userService) {
        var vm = this;
        vm.scrCfg = {
          title: 'Authentication',
          subtitle: ''
        };
        vm.message = {};

        vm.authenticate = authenticate;

        activate();
        ////////////////
        function activate() {
          $scope.rootCtrl.scrCfg = vm.scrCfg;
          vm.pinUrl = authService.getPinUrl();
          vm.message = {
              show : false
          };

        }

        function authenticate(pin) {
          _onSubmit();
          vm.submited = true;

          authService.authenticateByPin(pin)
          .then(function (response) {
              $cookies.put('accessToken', response.access_token);
              $cookies.put('refreshToken', response.refresh_token);

            _onSuccess();
        }, function (error) {
            _onError(error.data.error_description);
          });
        }

        function _onSubmit() {
          vm.message = {
              show : true
          };
          vm.submited = true;
          vm.success = false;
        }

        function _onError(msg) {
          vm.message = {
              show : true,
              clazz : 'alert alert-danger',
              icon : 'fa fa-exclamation-triangle',
              strong : 'Error',
              message : msg
          };
          vm.submited = false;
          vm.pin = '';
        }

        function _onSuccess() {
          vm.message = {
              show : true,
              clazz : 'alert alert-success',
              icon : 'fa fa-check',
              strong : 'Done!',
              message : 'you are authenticated.'
          };
          vm.success = true;
        }
    }
})();
