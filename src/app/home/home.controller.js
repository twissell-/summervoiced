(function() {
    'use strict';
    angular
        .module('app.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'UserService'];

    /* @ngInject */
    function HomeCtrl($scope, userService) {
        var vm = this;

        vm.scrCfg = {
          title: 'Dashboard',
          subtitle: ''
        };

        vm.watching = [];
        vm.planTo = [];

        vm.getWatchingList = getWatchingList;

        activate();
        ////////////////
        function activate() {
            $scope.rootCtrl.scrCfg = vm.scrCfg;
            userService.getPrincipal().then(getWatchingList);
            vm.comments = 23;
        }

        function getWatchingList() {
            userService.getAnimeList()
            .then(function (response) {
                vm.watching = response.data.lists.watching;
                vm.planTo = response.data.lists.plan_to_watch;
            });
        }
    }
})();
