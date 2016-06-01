(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['UserService'];

    /* @ngInject */
    function HeaderCtrl(userService) {
        var vm = this;
        vm.user = {
            name: ''
        };
        activate();
        ////////////////
        function activate() {
            userService.getCurrentUser()
            .then(function (response) {
                vm.user.name = response.display_name + ' : ' + response.id;
            });
        }
    }
})();
