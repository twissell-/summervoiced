(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$scope', 'UserService'];

    /* @ngInject */
    function HeaderCtrl($scope, userService) {
        var headerCtrl = this;

        activate();
        ////////////////
        function activate() {
        }


    }
})();
